import { Link, Outlet } from "react-router-dom"


const Root = () => (
	<div>
		<header>
			<Link to="/"> Start </Link>
			<Link to="/products"> Products </Link>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root