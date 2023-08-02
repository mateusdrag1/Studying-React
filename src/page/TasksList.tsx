import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { FormGroup } from '../components/FormGroup/FormGroup';
import { Link } from 'react-router-dom';

interface Task {
	id: number;
	name: string;
	active: boolean;
}

const TasksList = () => {
	const firstRender = useRef<boolean>(true);
	const [taskInput, setTaskInput] = useState<string>('');
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleAddTask = (task: string) => {
		if (task === '') {
			toast.error('Não é possível adicionar uma tarefa vazia!', {
				toastId: 'add-task',
			});
			return;
		}

		const newTask = {
			id: Math.random(),
			name: task,
			active: true,
		};

		toast.success('Tarefa adicionada com sucesso!');

		setTasks((oldTasks) => [...oldTasks, newTask]);
	};

	const handleToggleTask = (id: number) => {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					active: !task.active,
				};
			}

			return task;
		});

		setTasks(newTasks);
	};

	const handleRemoveTask = (id: number) => {
		if (tasks.filter((task) => task.id === id)[0].active) {
			if (!toast.isActive('remove-task')) {
				toast.error('Não é possível remover uma tarefa não concluída!', {
					toastId: 'remove-task',
				});
			}
			return;
		}

		const newTasks = tasks.filter((task) => task.id !== id);

		toast.success('Tarefa removida com sucesso!');

		setTasks(newTasks);
	};

	useEffect(() => {
		const tasks = localStorage.getItem('tasks');

		if (tasks) {
			setTasks(JSON.parse(tasks));
		}
	}, []);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const totalTasks = useMemo(() => {
		return tasks.length;
	}, [tasks]);

	return (
		<div>
			<header className="flex flex-col justify-center items-center gap-3 mt-10">
				<Link to="/">
					<h1 className="text-4xl font-bold">Lista de Tarefas</h1>
				</Link>
				<div className="flex flex-col mb-4 gap-3">
					<FormGroup
						labelText="Tarefa"
						onChange={(e) => setTaskInput(e.target.value)}
						value={taskInput}
					/>
					<button
						onClick={() => handleAddTask(taskInput)}
						className="bg-green-500 hover:bg-green-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out"
					>
						Adicionar Tarefa
					</button>
				</div>
			</header>

			<strong>Você tem {totalTasks} tarefas!</strong>

			<hr></hr>

			<main className="flex flex-col gap-3 my-5 max-w-3xl ml-auto mr-auto">
				{tasks.map((task) => (
					<div key={task.id} className="flex gap-3 items-center justify-start">
						<input
							type="checkbox"
							checked={!task.active}
							onChange={() => handleToggleTask(task.id)}
						/>
						<p
							className={`${
								!task.active ? 'line-through' : ''
							} break-words whitespace-normal max-w-3xl`}
						>
							{task.name}
						</p>

						<button
							className="bg-red-500 hover:bg-red-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out"
							onClick={() => handleRemoveTask(task.id)}
						>
							Remover
						</button>
					</div>
				))}
			</main>
		</div>
	);
};
export default TasksList;
