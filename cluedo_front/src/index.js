import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from './store'
import { Provider } from 'react-redux'
import { createGlobalStyle } from "styled-components"

import App from './App'
import Discussion from './pages/Discussion'
import Note from './pages/Note'
import CharacterDetails from './pages/CharacterDetails'
import Scene from './pages/Scene'
import Result from './pages/Result'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Arial;
  }
  
  #root {
    height: 100vh;
  }

  .App {
    height: 100vh;
  }

  /*
  * {
    border: solid red 1px;
    box-sizing: border-box;
  }
    */
`
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);