import Comments from "../pages/Comments";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

export const routes = [
    {id: 1, path: '/', element: <Home />},
    {id: 2, path: '/contact', element: <Contact />},
    {id: 3, path: '/comments', element: <Comments />},
    {id: 4, path: '/posts', element: <Posts />},
    {id: 5, path: '/*', element: <ErrorPage />},
]