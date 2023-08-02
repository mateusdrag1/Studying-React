import { Link } from 'react-router-dom';

export const ErrorPage = () => {
	return (
		<div className="flex h-screen items-center justify-center mx-16 md:mx-0">
			<div className="flex flex-col-reverse md:flex-row gap-16 items-center">
				<div>
					<h1 className="my-2 text-white-800 font-bold text-2xl">
						Parece que você encontrou a porta para o grande nada
					</h1>
					<p className="my-2 text-white-800">
						Desculpe por isso! Por favor, visite nossa página inicial para
						chegar onde você precisa ir.
					</p>

					<div className="mt-8">
						<Link
							to={'/'}
							className="my-8 border rounded-md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
						>
							Leve-me lá!
						</Link>
					</div>
				</div>
				<div>
					<img src="https://i.ibb.co/ck1SGFJ/Group.png" />
				</div>
			</div>
		</div>
	);
};
