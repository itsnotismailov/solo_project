import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { clientContext } from "../contexts/ClientContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MediaCard(props) {
  const { addAndDeleteProduct, checkProductInCart } =
    React.useContext(clientContext);
 
    React.useEffect(() => {
      Aos.init({ duration:20000 })
    }, [])

  return (
    
    <Card data-aos="zoom-in-up"
    className="islam"
      sx={{
        width: "250px",
        minWidth: "250px",
        margin: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        style={{ objectFit: "contain" }}
        image={props.product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3> {props.product.name}</h3>
        </Typography>
        {/* <Typography
          style={{ fontSize: "18px" }}
          variant="body2"
          color="text.secondary"
        >
          {props.product.description}
        </Typography> */}
        <Typography gutterBottom variant="h3" component="div">
          <p style={{ fontSize: "18px" }}>{props.product.price} сом</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addAndDeleteProduct(props.product)}>
          <ShoppingCartIcon
            color={checkProductInCart(props.product.id) ? "error" : "primary"}
          />
        </Button>
        <Link
          style={{ textDecoration: "none" }}
          to={`/product/${props.product.id}`}
        >
          <Button size="small" style={{ fontSize: "15px" }}>
            Подробнее...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
