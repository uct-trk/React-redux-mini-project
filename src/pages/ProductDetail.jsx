import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
export default function ProductDetail() {
  let { name } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductByName(name)
      .then((result) => setProduct(result.data.data));
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi`);
  };
  return (
    <>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category?.categoryName}</Card.Meta>
            <Card.Description>{product.quantityPerUnit}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                onClick={() => handleAddToCart(product)}
                basic
                color="green"
              >
                Sepete Ekle
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}
