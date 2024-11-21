import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./_layouts/index";
import { Index } from "./pages/Index";
import { Counter } from "./pages/Counter";
import { Background } from "./pages/Background";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Index /> },
        { path: '/counter', element: <Counter /> },
        { path: '/background', element: <Background /> },
      ],
    },
  ])