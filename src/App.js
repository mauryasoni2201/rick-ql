import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from './layouts/RootLayout/RootLayout';
import NotFound from './pages/NotFound';
import FullPageLoader from './components/FullPageLoader/FullPageLoader';

const Home = lazy(() => import('./pages/Home'));
const Characters = lazy(() => import('./pages/Characters'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Episodes = lazy(() => import('./pages/Episodes'));
const EpisodeDetail = lazy(() => import('./pages/EpisodeDetail'));
const LocationDetail = lazy(() => import('./pages/Location'));

const Lazy = (Component) => (
    <Suspense fallback={<FullPageLoader />}>
        <Component />
    </Suspense>
);

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: Lazy(Home) },
                { path: 'characters', element: Lazy(Characters) },
                { path: 'character/:id', element: Lazy(CharacterDetail) },
                { path: 'favorites', element: Lazy(Favorites) },
                { path: 'episodes', element: Lazy(Episodes) },
                { path: 'episodes/:id', element: Lazy(EpisodeDetail) },
                { path: 'location/:id', element: Lazy(LocationDetail) },
                { path: '*', element: <NotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
