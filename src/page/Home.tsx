import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<header>
				<img src="/logo.png" alt="logo" className="w-80" />
			</header>
			<main>
				<h2 className="text-2xl text-center mb-4">Aplicações</h2>

				<div className="flex gap-3">
					<Link
						to="/phrases"
						className="bg-green-500 hover:bg-green-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out flex justify-center items-center"
					>
						Frases
					</Link>
					<Link
						to="/tasks"
						className="bg-green-500 hover:bg-green-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out flex justify-center items-center"
					>
						Tarefas
					</Link>
					<Link
						to="/combustive"
						className="bg-green-500 hover:bg-green-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out flex justify-center items-center"
					>
						Combustível
					</Link>
				</div>
			</main>
		</div>
	);
};
