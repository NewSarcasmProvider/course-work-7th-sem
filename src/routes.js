import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/project', component: <Project /> },
  { path: '/contact', component: <Contact /> },
];

export default routes;