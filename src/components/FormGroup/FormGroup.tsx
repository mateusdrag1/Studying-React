type FormGroupProps = {
	labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormGroup = ({ labelText, id, ...props }: FormGroupProps) => {
	return (
		<div className="flex mt-2 flex-col">
			<label htmlFor={id}>{labelText}:</label>
			<input
				className="bg-transparent border rounded-lg p-2 px-4 mt-2 focus:border-yellow-500 transition duration-500 ease-in-out"
				name={id}
				{...props}
			></input>
		</div>
	);
};
