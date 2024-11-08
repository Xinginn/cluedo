import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Games from "./pages/Games"
import Discussion from './pages/Discussion'
import Note from './pages/Note'
import CharacterDetails from './pages/CharacterDetails'
import Scene from './pages/Scene'
import Result from './pages/Result'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Games />,
    },
    {
      path: "/scene",
      element: <Scene />,
    },
    {
      path: "/note",
      element: <Note />,
    },
    {
      path: "/discussion",
      element: <Discussion />,
    },
    {
      path: "/note/:id",
      element: <CharacterDetails />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App