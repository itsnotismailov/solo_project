import { Button } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer">
        <div
          className="perviy"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* <p className="title text"> */}
          <h3 style={{ marginBottom: "25px" }} className="title text">
            Наш Адрес
          </h3>
          {/* </p> */}
          <Button href="https://www.google.com/maps/place/29+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A2%D0%B0%D0%B1%D1%8B%D1%88%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8716154,74.5847386,17z/data=!3m1!4b1!4m5!3m4!1s0x389ec8241b52669f:0xb8b43841ad54c50b!8m2!3d42.8716154!4d74.5869273">
            <p className="subtitle text" style={{ color: "black" }}>
              ул.Гоголя, 29
            </p>
          </Button>
          {/* <Link to="/order" style={{ textDecoration: "none" }}>
            <Button>
              <p className="subtitle text" style={{ color: "white" }}>
                Доставка
              </p>
            </Button>
          </Link> */}
        </div>
        <div className="vtoraya">
          <h3 style={{ marginBottom: "25px" }} className="title text">
            Контактные данные
          </h3>
          <p> +996 (559) 99 79 53 
            <Button href="https://mail.google.com/mail/u/0/?pli=1">
            <EmailIcon sx={{ fontSize: 40, color: "black" }} />
          </Button></p>
          

          {/* <Button href="https://www.instagram.com/karagullov/?utm_medium=copy_link">
            <InstagramIcon sx={{ fontSize: 40, color: "black" }} />
          </Button>

          <Button href="https://www.facebook.com/people/%D0%A0%D0%B0%D0%B2%D1%88%D0%B0%D0%BD-%D0%91%D0%B0%D0%B9%D0%BC%D0%B0%D1%82%D0%BE%D0%B2/100034483932803/">
            <FacebookIcon sx={{ fontSize: 40, color: "black" }} />
          </Button> */}
        </div>
        <div>
          <h3 style={{ marginBottom: "25px" }} className="title text">
            Доставка
          </h3>
          <Link to="/order" style={{ textDecoration: "none" }}>
            <Button>
              <p className="subtitle text" style={{ color: "black" }}>
                Подробнее о доставке
              </p>
            </Button>
          </Link>
        </div>

        <div className="tretaya">
          <div className="erlan">
            <h3 style={{ marginBottom: "25px" }} className="title text">
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
