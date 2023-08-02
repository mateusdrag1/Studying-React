import { useState } from 'react';
import { categories } from '../constants/Categories';
import { goodMorningPhrases, motivationsPhrases } from '../constants/Phrases';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const Phrases = () => {
	const [category, setCategory] = useState<number>(0);
	const [phrase, setPhrase] = useState<string>('');

	const handleCategory = (category: number) => {
		setCategory(category);
	};

	const handleGeneratePhrase = () => {
		if (category === 0) {
			toast.error('Selecione uma categoria');
			return;
		}

		if (category === 1) {
			const phrase =
				motivationsPhrases[
					Math.floor(Math.random() * motivationsPhrases.length)
				];
			setPhrase(phrase);
		}

		if (category === 2) {
			const phrase =
				goodMorningPhrases[
					Math.floor(Math.random() * goodMorningPhrases.length)
				];
			setPhrase(phrase);
		}
	};

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<header>
				<Link to="/">
					<img src="/logo-dev.png" alt="logo" className="w-80" />
				</Link>
			</header>
			<main>
				<h2 className="text-2xl text-center mb-4">Categorias</h2>
				<div className="flex gap-3">
					{categories.map((category) => (
						<button
							key={category.id}
							className="bg-green-500 hover:bg-green-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out"
							onClick={() => handleCategory(category.id)}
						>
							{category.name}
						</button>
					))}
				</div>

				<div className="mt-5 flex justify-center items-center">
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-12  px-4 rounded-lg  transition duration-500 ease-in-out"
						onClick={handleGeneratePhrase}
					>
						Gerar Frase
					</button>
				</div>
			</main>
			<footer>
				{phrase && (
					<div className="mt-5 flex justify-center items-center bg-green-300 max-w-lg p-4 rounded-lg">
						<p className="text-center text-xl text-green-800 italic">
							"{phrase}"
						</p>
					</div>
				)}
			</footer>
		</div>
	);
};
