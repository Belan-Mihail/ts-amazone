import { Button, Card } from 'react-bootstrap'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../types/Products'
import Rating from './Rating'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { convertProductToCartItem } from '../utils'
import { toast } from 'react-toastify'

function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state

  const addToCartHandler = (item: CartItem) => {
    //check if product already exist in cart
    const existItem = cartItems.find((x) => x._id === product._id)
    // if it does we going to increas quantity by 1 
    const quantity = existItem ? existItem.quantity + 1 : 1
    // quantity more than countInStock
    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      // item is parametr (16), quantity our const (20)
      payload: { ...item, quantity },
    })
    toast.success('Product added to the cart')
  }


  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button
          onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem

// 2:57:10