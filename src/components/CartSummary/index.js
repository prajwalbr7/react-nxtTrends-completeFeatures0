// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      const ItemsInCart = cartList.length
      return (
        <div className="cart-summery-container">
          <div className="">
            <h1 className="cart-summery-para-style1">
              Order Total:{' '}
              <span className="span-cart-summery-style">Rs {total}/-</span>
            </h1>
            <p className="cart-para2">{ItemsInCart} items in cart</p>
            <button className="cart-summery-style" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
