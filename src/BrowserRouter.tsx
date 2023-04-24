import { createBrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./Layout";
import Stars from "./components/Stars/Stars";
import Article from "./components/News/Article/Article";

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
                    path: "/:id",
                    element: <Article />
                },
                {
                    path: "/stars",
                    element: <Stars />
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