import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { clientContext } from "../contexts/ClientContext";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DetailPage = () => {
  const { getDetails, productDetails } = useContext(clientContext);
  const { addAndDeleteProduct, checkProductInCart } =
    React.useContext(clientContext);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div className="detail-page">
          <div className="detail-image">
            <img width="500" src={productDetails.image} alt="" />
          </div>
          <div className="details">
            <h2>{productDetails.name}</h2>
            <p>{productDetails.description}</p>
            <Button
              onClick={() => navigate("/credit/card")}
              color="success"
              variant="contained"
            >
              Купить
            </Button>
            <Button
              size="small"
              onClick={() => addAndDeleteProduct(productDetails)}
            >
              <ShoppingCartIcon
                color={
                  checkProductInCart(productDetails.id) ? "error" : "primary"
                }
              />
            </Button>
            <div className="character">
              {/* <h4>Характеристики</h4> */}
              <ul>
                <li>
                  <strong>Цена:</strong>
                  <span>{productDetails.price} сом</span>
                </li>
                {/* <li>
                  <strong>Тип:</strong>
                  <span>{productDetails.type}</span>
                </li> */}
                {/* <li> */}
                  {/* <strong>Бренд:</strong> */}
                  {/* <span>{phoneDetails.brand}</span> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default DetailPage;
