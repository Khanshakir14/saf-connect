import DashboardLayout from "../../layouts/DashboardLayout";

const Hospital = () => {
	return (
		<DashboardLayout>
			<main>
				<ul class="px-5 space-y-2">
					
					{Array(3).fill(<li key={crypto.randomUUID()}>
						<a
							href="/dashboard/hospital/jnmc"
							class="block p-4 px-2 shadow-md hover:shadow-lg transition-shadow rounded-md"
						>
							<div class="flex justify-between">
								<div class="flex items-center">
									<div>
										<img
											src="https://picsum.photos/200/200"
											class="size-14 rounded-md"
											alt="jnmc hospital"
										/>
									</div>
									<div class="pl-2">
										<h2 class="font-semibold text-lg leading-6">MC Hospital</h2>
										<div class="font-thin text-sm text-neutral-400">
											Medical Road
										</div>
										<div class="font-thin text-sm text-neutral-400 leading-3">
											10 km away
										</div>
									</div>
								</div>
								<div class="text-sm text-neutral-400">
									<div>
										786{" "}
										<svg
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											class="size-4 inline"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
											/>
										</svg>
									</div>
									<div>
										10{" "}
										<svg
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											class="size-4 inline"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
											/>
										</svg>
									</div>
									<div>40 wards</div>
								</div>
							</div>
						</a>
					</li>)}
				</ul>
			</main>
		</DashboardLayout>
	);
};

export default Hospital;
