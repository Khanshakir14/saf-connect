export const Layout = ({ children }) => (
	<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-4 px-6">
		<div class="mx-auto max-w-md">
			<div class="text-5xl font-light text-neutral-950">
				<span class="text-blue-500">SAF</span> <span>Connect</span>
			</div>
			{children}
		</div>
	</div>
);
