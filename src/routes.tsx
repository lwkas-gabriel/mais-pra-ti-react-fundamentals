import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./_layouts/index";
import { Index } from "./pages/Index";
import { Counter } from "./pages/Counter";
import { Background } from "./pages/Background";
import { ToDo } from "./pages/ToDo";
import { Timer } from "./pages/Timer";
import { FilterName } from "./pages/FilterName";
import { Form } from "./pages/Form";
import { PostsList } from "./pages/PostsList";
import { ImageGallery } from "./pages/ImageGallery";
import { PomodoroTimer } from "./pages/PomodoroTimer";
import { Tabs } from "./pages/Tabs";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Index /> },
        { path: '/counter', element: <Counter /> },
        { path: '/background', element: <Background /> },
        { path: '/todo-list', element: <ToDo /> },
        { path: '/timer', element: <Timer /> },
        { path: '/filter-names', element: <FilterName /> },
        { path: '/form', element: <Form /> },
        { path: '/posts-list', element: <PostsList /> },
        { path: '/image-gallery', element: <ImageGallery /> },
        { path: '/pomodoro-timer', element: <PomodoroTimer /> },
        { path: '/tabs', element: <Tabs /> },
      ],
    },
  ])