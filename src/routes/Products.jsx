import { NavLink, Outlet, useLoaderData, Link } from "react-router-dom"
import ProductDetails from "./ProductDetails"

const testData = [
	{ "id": 1, "name": "Sewing Machine", "short_description": "A mechanical or electronic device that sews fabrics together with thread.", "price": 299.99 },
	{ "id": 2, "name": "Seam Ripper", "short_description": "A small tool used for cutting and removing stitches.", "price": 3.99 },
	{ "id": 3, "name": "Scissors", "short_description": "A cutting instrument consisting of two blades with finger holes.", "price": 12.99 },
	{ "id": 4, "name": "Measuring Tape", "short_description": "A flexible ruler used to take body measurements and measure fabrics.", "price": 2.99 },
	{ "id": 5, "name": "Pins", "short_description": "Thin metal or plastic rods with pointed ends used to hold fabrics together.", "price": 1.99 },
	{ "id": 6, "name": "Thread", "short_description": "A long, thin strand of cotton or other material used for sewing.", "price": 4.99 },
	{ "id": 7, "name": "Iron", "short_description": "A device used for pressing wrinkles out of fabrics.", "price": 39.99 },
	{ "id": 8, "name": "Rotary Cutter", "short_description": "A cutting tool with a circular blade used for cutting fabrics.", "price": 24.99 }
]

export const loader = () => testData


const Products = () => {
	const productData = useLoaderData()
	return (
		<section>
			<h1 className="products-heading"> Products </h1>
			<ul className="product-list">
				{productData.map(({ id, name, price, short_description }) => (
					<li key={id} className="product-card">
						<h3><Link to={'/details/' + id}>{name}</Link></h3>
						<p>{price}</p>
						<p>{short_description}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Products