import type React from "react";

type IconInputProps = {
	label: string;
	name: string;
	type: React.HTMLInputTypeAttribute;
	iconPath: React.ReactNode;
	placeholder: string;
	textarea: boolean;
};

const IconInput = ({
	label,
	name,
	type = "text",
	iconPath,
	placeholder,
	textarea = false,
	...props
}: Partial<IconInputProps>) => {
	return (
		<label class="block">
			<span class="text-gray-700">{label}</span>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-400"
						viewBox="0 0 24 24"
					>
						{iconPath}
					</svg>
				</div>
				{textarea ? (
					<textarea
						type={type}
						class="mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						placeholder={placeholder}
						name={name}
						{...props}
					/>
				) : (
					<input
						type={type}
						class="mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-neutral-800"
						placeholder={placeholder}
						name={name}
						{...props}
					/>
				)}
			</div>
		</label>
	);
};

export default IconInput;
