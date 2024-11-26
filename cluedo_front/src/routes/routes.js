import { createBrowserRouter } from "react-router-dom"

import ProtectionRoutes from "./ProtectionRoutes"
import Games from "../pages/Games"
import Discussion from '../pages/Discussion'
import Note from '../pages/Note'
import CharacterDetails from '../pages/CharacterDetails'
import Scene from '../pages/Scene'
import Result from '../pages/Result'
import Auth from '../pages/Auth'

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth />
    ),
  },
  {
    path: "/games",
    element: (
      <ProtectionRoutes>
        <Games />
      </ProtectionRoutes>
    ),
  },
  {
    path: "/scene",
    element: (
      <ProtectionRoutes>
        <Scene />
      </ProtectionRoutes>
    ),
  },
  {
    path: "/note",
    element: (
      <ProtectionRoutes>
        <Note />
      </ProtectionRoutes>
    ),
  },
  {
    path: "/discussion",
    element: (
      <ProtectionRoutes>
        <Discussion />
      </ProtectionRoutes>
    ),
  },
  {
    path: "/note/:id",
    element: (
      <ProtectionRoutes>
        <CharacterDetails />
      </ProtectionRoutes>
    ),
  },
  {
    path: "/result",
    element: (
      <ProtectionRoutes>
        <Result />
      </ProtectionRoutes>
    ),
  },
])