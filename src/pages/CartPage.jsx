import { useSelector } from "react-redux"

const CartPage = () => {
  const { cartItems } = useSelector(state => state.products)
  return (
    <div>
      <h3>Cart</h3>
      {cartItems.length === 0 && <div>There are no items in the cart</div>}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default CartPage
