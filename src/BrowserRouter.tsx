import { createBrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./Layout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "",
                    element: <News />
                },
                {
                    path: "/users",
                    element: <ErrorPage />
                },
                {
                    path: "/users/:userId",
                    //element: <UserPage />
                }, 
                {
                    path: "/counter",
                    //element: <Counter />
                }
            ]
        }
    ]
);

export default router;