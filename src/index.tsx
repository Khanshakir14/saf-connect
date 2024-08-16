import { LocationProvider, Router, Route, hydrate, prerender as ssr, lazy } from 'preact-iso';

import { NotFound } from './pages/_404.jsx';
import './style.css';
const Home = lazy(()=>import('./pages/home.js'));
const DashboardHome = lazy(()=>import('./pages/dashboard/home.js'));
const Login = lazy(()=>import('./pages/login.js'));
import Beds from './pages/beds.js'
import { Toaster } from 'sonner'
const Hospital = lazy(()=>import('./pages/dashboard/hospital.js'));
const Chats = lazy(()=>import('./pages/dashboard/chats.js'));
const Notifs = lazy(()=>import('./pages/dashboard/notifs.js'));
const Settings = lazy(()=>import('./pages/dashboard/settings.js'));

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
