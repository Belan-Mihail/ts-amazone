
import { Col, Row } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHook'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'



function HomePage() {

  const { data: products, isLoading, error } = useGetProductsQuery()
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as unknown as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
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