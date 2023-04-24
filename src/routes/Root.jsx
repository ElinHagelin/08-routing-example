import { Link, Outlet, NavLink } from "react-router-dom"


const Root = () => (
	<div>
		<header>
			<nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/products"> Products </NavLink>
				<NavLink to="/about"> About </NavLink>
				<NavLink to='/error'>This does not exist</NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root