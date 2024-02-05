import React from 'react'
import "./App.css"
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import Contacts from './Components/Contacts/Contacts'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'


export default function App() {

  let routes = createBrowserRouter([
    {path:"",element:<LayOut/>,children:[
      {index:true,element:<Home/>},
      {path:"first-react-project",element:<Home/>},
      {path:"contacts",element:<Contacts/>},
      {path:"about", element:<About/>},
      {path:"portfolio",element: <Portfolio/>}
    ]}
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
