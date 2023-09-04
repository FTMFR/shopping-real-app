import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { productdetailAction } from '../action/productAction';


const Product = ({ history, match }) => {
  // const [product, setProduct] = useState({})

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const response = await axios.get(
  //       `http://localhost:8000/api/products/${match.params.id}`
  //     );
  //     setProduct(response.data)
  //   };
  //   sendRequest();
  // }, [match]);

  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;

  useEffect(() => {
    dispatch(productdetailAction(match.params.id))
  }, [dispatch, match]);


  const addToCardHandler = () => {
    history.push(`/card/${match.params.id}`);
  };


  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button onClick={addToCardHandler} className="btn-block" type="button">
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Product
