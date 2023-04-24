import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './routeConfig.jsx'


// rendera appen
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// om URL är "/" -> visa startsidan
// Om URL är: "/cart" -> visa kundvagnen
// om URL är : "/products" -> visa produkterna