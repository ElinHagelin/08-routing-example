import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom'


const ProductDetails = () => {
	// id kommer från URL:  /details/:id
	// vi återanvänder loader-funktionen från Products.jsx
	// Leta efter produkten med samma id i listan med alla produkter. Se upp med datatyperna!
	const navigate = useNavigate()
	const { id } = useParams()  // obs! id är en sträng!
	const allProducts = useLoaderData()
	const product = allProducts.find(p => String(p.id) === id)

	// console.log('ProductDetails: product=', product, id, allProducts, (typeof id))

	// Obs! "product" kan bli undefined
	// if( !product ) {
	// 	navigate('/error')
	// 	return null
	// }
	if (!product) {
		return (
			<section>
				<h2> No product </h2>
				<p> Please check the URL again. </p>
				<p> <Link to="/products"> Back to products </Link> </p>
			</section>
		)
	}

	return (
		<section className='product-details'>
			<h2 className='detail-heading'> {product.name} </h2>
			<p> {product.price} </p>
			<p> {product.short_description} </p>

			<p className='back'> <Link to="/products"> Back to products </Link> </p>
		</section>
	)
}

export default ProductDetails