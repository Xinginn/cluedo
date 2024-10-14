import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Discussion from './templates/Discussion'
import Note from './templates/Note'
import { createGlobalStyle } from "styled-components"


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
`
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/note",
    element: <Note />,
  },
  {
    path: "/discussion",
    element: <Discussion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);