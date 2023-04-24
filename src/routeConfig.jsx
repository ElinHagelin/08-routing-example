import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Start from './routes/Start.jsx'
import Products from './routes/Products.jsx'
import './index.css'
import About from './routes/About.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

// Skapa en router med konfiguration, som beskriver all routes som ska finas in appen.
const router = createHashRouter([
	{
		// Om URL börjar med "/"...
		path: '/',

		// ...så visa denna komponent
		element: <Root />,
		children: [
			{
				path: '',
				element: <Start />
			},
			{
				path: 'products',
				element: <Products />
			},
			{
				path: 'about',
				element: <About />
			}
		],
		// Används om URL inte matchar någon tidigare
		errorElement: <ErrorPage />
	}
])

export { router }