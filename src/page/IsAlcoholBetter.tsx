import { useState } from 'react';
import Card from '../components/Card/Card';
import { FormGroup } from '../components/FormGroup/FormGroup';
import { Link } from 'react-router-dom';

interface Result {
	alcoholPrice: number;
	gasolinePrice: number;
	isAlcoholBetter: boolean;
}

function IsAlcoholBetter() {
	const [result, setResult] = useState<Result>({} as Result);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const alcoholPrice = Number(event.currentTarget.alcohol.value);
		const gasolinePrice = Number(event.currentTarget.gasoline.value);

		console.log(alcoholPrice, gasolinePrice);

		const isAlcoholBetter = alcoholPrice / gasolinePrice < 0.7;

		setResult({
			alcoholPrice,
			gasolinePrice,
			isAlcoholBetter,
		});

		event.currentTarget.reset();
	};

	const handleReset = () => {
		setResult({} as Result);
	};

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<header className="flex justify-center items-center flex-col mb-5">
				<Link to="/">
					<img
						src="/logo-gasolina.png"
						alt="logo"
						className="w-36 rounded-full"
					/>
				</Link>
				<h1 className="font-bold mt-6 text-2xl">Qual a melhor opção?</h1>
			</header>
			<main className="max-w-lg w-full px-4">
				<form onSubmit={handleSubmit}>
					<FormGroup
						labelText="Álcool (preço por litro)"
						id="alcohol"
						min={1}
						step={0.01}
						type="number"
					/>
					<FormGroup
						labelText="Gasolina (preço por litro)"
						id="gasoline"
						min={1}
						step={0.01}
						type="number"
					/>
					<div className="flex">
						<button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-500 ease-in-out w-full">
							Calcular
						</button>

						{Object.keys(result).length > 0 && (
							<button
								type="button"
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-500 ease-in-out w-full ml-2"
								onClick={handleReset}
							>
								Reiniciar
							</button>
						)}
					</div>
				</form>
			</main>
			<footer className="max-w-sm items-center justify-center flex w-full">
				{Object.keys(result).length > 0 && (
					<Card
						alcoholPrice={result.alcoholPrice}
						gasolinePrice={result.gasolinePrice}
						isAlcoholBetter={result.isAlcoholBetter}
					/>
				)}
			</footer>
		</div>
	);
}

export default IsAlcoholBetter;
