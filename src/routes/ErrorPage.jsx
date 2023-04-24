import { Link } from "react-router-dom"

const ErrorPage = () =>
(
	<section>
		<p>Whoops! Looks like something went wrong with that link.</p>
		<p>Do you want to go back to the start page?</p>
		<p><Link to='/'> Start page </Link></p>
	</section>
)

export default ErrorPage