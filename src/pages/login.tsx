import { Layout } from "../layouts/header";

export const Login = () => (
	<Layout>
		<div class="divide-y divide-gray-300/50">
			<form
				action="https://tailwindcss.com/docs"
				method="post"
				class="space-y-3 py-8 text-base leading-7 text-gray-600"
			>
				<p class="pb-5 text-xl font-light">Patient Registeration</p>
				<label class="block">
					<span class="text-gray-700">Full name</span>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
								/>
							</svg>
						</div>
						<input
							type="text"
							class="mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							placeholder="John Doe"
						/>
					</div>
				</label>
				<label class="block">
					<span class="text-gray-700">Email</span>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
								/>
							</svg>
						</div>
						<input
							type="email"
							class="mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							placeholder="joe@example.com"
						/>
					</div>
				</label>
				<label class="block">
					<span class="text-gray-700">Password</span>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
								/>
							</svg>
						</div>
						<input
							type="password"
							class="mt-1 block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							autocomplete="new-password"
							placeholder="N00bMa$ter69"
						/>
					</div>
				</label>
				<div class="block">
					<div class="mt-2">
						<div>
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0"
									checked
								/>
								<span class="ml-2">
									I accept your
									<a href="tnc" class="underline">
										Terms & Conditions
									</a>
									&
									<a href="privacy" class="underline">
										Privacy Policy
									</a>
								</span>
							</label>
						</div>
					</div>
				</div>
				<button
					type="submit"
					class="container block max-w-max self-center rounded-md border-2 bg-sky-500 p-2 text-neutral-100"
				>
					Create an account
				</button>
			</form>
		</div>

		<div class="cotnainer flex space-x-10 text-nowrap pt-8 font-semibold">
			<a
				href="https://tailwindcss.com/docs"
				class="container flex items-center rounded border-2 border-sky-500 p-2 text-sky-500 hover:text-sky-600"
			>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					class="mr-1 size-4"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"
					/>
				</svg>
				Login with Google
			</a>
			<a
				href="https://tailwindcss.com/docs"
				class="container flex items-center rounded border-2 border-sky-500 p-2 text-sky-500 hover:text-sky-600"
			>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					class="size-5"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712M14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1z"
						clip-rule="evenodd"
					/>
				</svg>
				Login with Facebook
			</a>
		</div>
	</Layout>
);
