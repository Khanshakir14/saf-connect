import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { NotFound } from './pages/_404.jsx';
import './style.css';
import Home from './pages/home.js';
import DashboardHome from './pages/dashboard/home.js';
import { Login } from './pages/login.js';
import Beds from './pages/beds.js';
import { Toaster } from 'sonner'
import Hospital from './pages/dashboard/hospital.js';
import Chats from './pages/dashboard/chats.js';
import Notifs from './pages/dashboard/notifs.js';
import Settings from './pages/dashboard/settings.js';

export function App() {
	return (
		<LocationProvider>
			<Toaster richColors/>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/beds" component={Beds} />
					<Route path="/dashboard" component={DashboardHome} />
					<Route path="/dashboard/home" component={DashboardHome} />
					<Route path="/dashboard/chats" component={Chats} />
					<Route path="/dashboard/hospital" component={Hospital} />
					<Route path="/dashboard/notifs" component={Notifs} />
					<Route path="/dashboard/settings" component={Settings} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
