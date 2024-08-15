import cx from "classix";
import { useLocation } from "preact-iso";

const DashboardLayout = ({ children }) => {
	const { path } = useLocation();
	const isHome =
		path.endsWith("/dashboard/home") || path.endsWith("/dashboard");
	const isChats = path.endsWith("/dashboard/chats");
	const isHospitals = path.endsWith("/dashboard/hospital");
	const isNotifs = path.endsWith("/dashboard/notifs");
	const isSettings = path.endsWith("/dashboard/settings");

	return (
		<>
			<header class="flex bg-fixed shadow-md p-2 items-between justify-between">
				<div class="flex">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						class="size-6 mt-0.5"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
						/>
					</svg>
					<span class="font-semibold text-xl px-2">SAF Connect</span>
				</div>
				<button type="button" class="peer">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						class="size-6"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
						/>
					</svg>
				</button>
				<ul class="space-y-2 divide-y-2 rounded-lg px-4 py-2 shadow scale-0 peer-focus:scale-100 fixed right-5 bg-current top-8 transition-transform text-neutral-600">
					<li class="hover:bg-neutral-100">
						<a href="wards">Wards</a>
					</li>
					<li class="hover:bg-neutral-100">
						<a href="beds">Beds</a>
					</li>
					<li class="hover:bg-neutral-100">
						<a href="doctors">Doctors</a>
					</li>
					<li class="hover:bg-neutral-100">
						<a href="labs">Labs</a>
					</li>
				</ul>
			</header>
			{children}

			<footer class="fixed bottom-0 container w-full shadow-lg rounded-xl">
				<div class="flex justify-evenly items-center text-neutral-400 text-xs text-center py-2">
					<a
						href="/dashboard/home"
						class={cx(
							"hover:text-sky-500 hover:cursor-pointer",
							isHome && "text-sky-400",
						)}
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="size-6 mx-auto"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3"
							/>
						</svg>
						<span>Home</span>
					</a>
					<a
						href="/dashboard/chats"
						class={cx(
							"block hover:text-sky-500 hover:cursor-pointer",
							isChats && "text-sky-400",
						)}
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="size-6 mx-auto"
							viewBox="0 0 256 256"
						>
							<path
								fill="currentColor"
								d="M168 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m72-8a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.47a7.9 7.9 0 0 1 2.53-.42a8 8 0 0 1 4 1.08A88 88 0 0 0 216 128"
							/>
						</svg>
						<span>Chats</span>
					</a>
					<a
						href="/dashboard/hospital"
						class={cx(
							"hover:text-sky-500 hover:cursor-pointer",
							isHospitals && "text-sky-400",
						)}
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="size-6 mx-auto"
							viewBox="0 0 24 24"
						>
							<path fill="currentColor" d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6z" />
						</svg>
						<span>Hospitals</span>
					</a>
					<a
						href="/dashboard/notifs"
						class={cx(
							"block hover:text-sky-500 hover:cursor-pointer",
							isNotifs && "text-sky-400",
						)}
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="size-6 mx-auto"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z"
							/>
						</svg>
						<span>Notifs</span>
					</a>
					<a
						href="/dashboard/settings"
						class={cx(
							"hover:text-sky-500 hover:cursor-pointer",
							isSettings && "text-sky-400",
						)}
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="size-6 mx-auto"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"
							/>
						</svg>
						<span class="text-center">Settings</span>
					</a>
				</div>
			</footer>
		</>
	);
};

export default DashboardLayout;
