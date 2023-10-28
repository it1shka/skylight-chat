import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import styled, { createGlobalStyle } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainView from './MainView'
import ChatView from './ChatView'
import MapView from './MapView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />
  },
  {
    path: "/chat",
    element: <ChatView />
  },
  {
    path: "/map",
    element: <MapView />
  }
])

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    height: 100vh;
    display: grid;
    place-items: center;
    font-size: 1.2em;
    background-color: #f1f1f1;
  }
`

const AppContainer = styled.main`
  height: min(100vh, 760px);
  width: min(100vw, 600px);
  background-color: white;
  /* background-color: #96c9dc3b; */
  border: 1px solid #ccc;
  box-shadow: #63636333 0px 2px 8px 0px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
  }
`

const root = ReactDOM.createRoot (
  document.getElementById('root') as HTMLElement
)

root.render (
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </RecoilRoot>
  </React.StrictMode>
)
