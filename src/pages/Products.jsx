import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addToCart, getProducts } from "../store/products.slice"


const Products = () => {
  const { products, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>Products</h3>
      {products.length === 0 && <div>There are no products</div>}
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}<button onClick={() => dispatch(addToCart(product))}>Купить</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Products
