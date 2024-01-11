type ButtonProps = {
	text: string;
	className: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
	onClick?: (
		e: React.MouseEvent<HTMLButtonElement>
	) => void;
};

export default function Button({
	text,
	className,
	type = 'button',
	disabled,
	onClick,
}: ButtonProps) {
	return (
		<button
			className={className}
			{...{ disabled, type, onClick }}>
			{text}
		</button>
	);
}
