import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { ApiError } from '../types/ApiError'
import { Product } from '../types/Products'
import { getError } from '../utils'


type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | {
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
  | { type: 'FETCH_FAIL'; payload: string }

  const initialState: State = {
    products: [],
    loading: true,
    error: '',
  }

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true }
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false }
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload }
      default:
        return state
    }
  }

function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
      }
    }
    fetchData()
  }, [])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Row>
      {products.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <Link to={'/product/' + product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

HomePage.propTypes = {};

export default HomePage;

//past code frome app tsx and add route in main tsx
//9 add link
//10 create backend folder. cd backend. npm init -y
//11 create tsconfig.json
//12 npm install --save-dev typescript ts-node-dev. then tsconfig.json
//13 add config. then install eslint 
// npm install --save-dev eslint @eslint/js typescript typescript-eslint
//14 then create .eslintrc.js and go to it
//15 create index.ts in src in backend
//16 npm i --save-dev @types/express
//copy types folder and data.ts from fronted to backend
//17 add more setting to package.json 
//18 add new terminal and go to frontend folder and go to main.ts

//1:00:25