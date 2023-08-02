interface CardProps {
	alcoholPrice: number;
	gasolinePrice: number;
	isAlcoholBetter: boolean;
}

export default function Card({
	alcoholPrice = 0,
	gasolinePrice = 0,
	isAlcoholBetter,
}: CardProps) {
	return (
		<div className="flex flex-col bg-green-600 py-4 w-full mt-6 justify-center items-center gap-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
			<h1 className="text-2xl">
				Compensa usar {isAlcoholBetter ? 'Álcool' : 'Gasolina'}!
			</h1>
			<div className="flex flex-col justify-center items-center gap-3">
				<h2 className="text-sm font-bold">
					Preço do álcool: R$ {alcoholPrice?.toFixed(2).replace('.', ',')}
				</h2>
				<h2 className="text-sm font-bold">
					Preço da gasolina: R$ {gasolinePrice?.toFixed(2).replace('.', ',')}
				</h2>
			</div>
		</div>
	);
}
