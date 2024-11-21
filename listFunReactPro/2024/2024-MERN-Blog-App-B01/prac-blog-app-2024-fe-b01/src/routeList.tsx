import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import PostListPage from "./routes/PostListPage";
import Write from "./routes/Write";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import SinglePostPage from "./routes/SinglePostPage";
import MainLayout from "./layouts/MainLayout";


export const routerList = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/posts",
          element: <PostListPage />
        },
        {
          path: "/:slug",
          element: <SinglePostPage />
        },
        {
          path: "/write",
          element: <Write />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
      ]
    }
  ]);