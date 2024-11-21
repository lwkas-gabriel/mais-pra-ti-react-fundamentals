import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeContextProvider } from './context/ThemeContext';

export function App() {

  return (
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
  )
}