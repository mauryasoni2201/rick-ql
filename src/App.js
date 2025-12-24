import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from './layouts/RootLayout/RootLayout';
import NotFound from './pages/NotFound';
import FullPageLoader from './components/FullPageLoader/FullPageLoader';

const Home = lazy(() => import('./pages/Home'));
const Characters = lazy(() => import('./pages/Characters'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));
const Favorites = lazy(() => import('./pages/LikedCharacters'));
const Episodes = lazy(() => import('./pages/Episodes'));
const EpisodeDetail = lazy(() => import('./pages/EpisodeDetail'));
const LocationDetail = lazy(() => import('./pages/LocationDetail'));

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
                {
                    path: 'characters',
                    children: [
                        {
                            index: true,
                            element: Lazy(Characters),
                        },
                        {
                            path: ':id',
                            element: Lazy(CharacterDetail),
                        },
                    ],
                },
                {
                    path: 'episodes',
                    children: [
                        { index: true, element: Lazy(Episodes) },
                        { path: ':id', element: Lazy(EpisodeDetail) },
                    ],
                },
                {
                    path: 'location',
                    children: [{ path: ':id', element: Lazy(LocationDetail) }],
                },
                {
                    path: 'liked-characters',
                    element: Lazy(Favorites),
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
