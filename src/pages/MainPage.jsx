import { PlayCircleFilledWhite } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import MediaCard from "../components/Card";
// import Carousel1 from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import Pagination1 from "../components/Pagination";
import { clientContext } from "../contexts/ClientContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { getProduct, products, currentPosts } = useContext(clientContext);
  useEffect(() => {
    getProduct();
  }, []);

  const navigate = useNavigate();

  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);

  function filterProducts(key, value) {
    object.set(key, value);
    let newURL = `${window.location.pathname}?${object.toString()}`;
    navigate(newURL);
    getProduct();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("type"));
  }, [object]);

  useEffect(() => {
    getProduct();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="body">
      {/* <Carousel1 /> */}

      <div className="main-page">
        {/* <div className="slider"></div> */}
        <div className="sidebar" style={{ marginTop: "5%" }}>
          <Button
            variant="contained"
            color="warning"
            style={{ marginTop: "12%", marginLeft: "9%" }}
            onClick={handleShow}
          >
            Посмотреть котегорию
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            {/* <Button
              variant="contained"
              color="success"
              style={{ marginTop: "9%", marginLeft: "9%" }}
              onClick={() => {
                navigate("/");
                getProduct();
              }}
            >
              Выбрать все категории
            </Button> */}
          </Link>
          <Modal
            show={show}
            onHide={handleClose}
            style={{ marginTop: "4%", marginLeft: "0px" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Категории:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl component="fieldset">
                {/* <FormLabel component="animateTransform">
                  <h2 style={{ color: "white" }}>Вид спорта</h2>
                </FormLabel> */}
                <RadioGroup
                  aria-label="gender"
                  value={brandValue}
                  name="radio-buttons-group"
                  onChange={(e) => filterProducts("type", e.target.value)}
                >
                  <FormControlLabel
                    value="Пицца"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    } 
                    label="Пицца"
                  />
                  <FormControlLabel
                    value="Суши"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Суши"
                  />
                  <FormControlLabel
                    value="Роллы"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Роллы"
                  />
                  <FormControlLabel
                    value="Напитки"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Напитки"
                  />
                  <FormControlLabel
                    value="Алкоголь"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Алкоголь"
                  />
                  {/* <FormControlLabel
                    value="Карате"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Карате"
                  />
                  <FormControlLabel
                    value="Самбо"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Самбо"
                  />
                  <FormControlLabel
                    value="Плавание"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Плавание"
                  />
                  <FormControlLabel
                    value="Зимний спорт"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Зимний спорт"
                  />
                  <FormControlLabel
                    value="Аксессуары"
                    control={
                      <Radio
                        onClick={handleClose}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[800],
                          },
                        }}
                      />
                    }
                    label="Аксессуары"
                  /> */}
                </RadioGroup>
              </FormControl>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
          {/* <FormControl component="fieldset">
            <FormLabel component="animateTransform">
              <h2 style={{ color: "white" }}>Вид спорта</h2>
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterProducts("type", e.target.value)}
            >
              <FormControlLabel
                value="Футбол"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Футбол"
              />
              <FormControlLabel
                value="Баскетбол"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Баскетбол"
              />
              <FormControlLabel
                value="Волейбол"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Волейбол"
              />
              <FormControlLabel
                value="Бокс"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Бокс"
              />
              <FormControlLabel
                value="Борьба"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Борьба"
              />
              <FormControlLabel
                value="Карате"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Карате"
              />
              <FormControlLabel
                value="Самбо"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Самбо"
              />
              <FormControlLabel
                value="Плавание"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Плавание"
              />
              <FormControlLabel
                value="Зимний спорт"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Зимний спорт"
              />
              <FormControlLabel
                value="Аксессуары"
                control={
                  <Radio
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                }
                label="Аксессуары"
              />
            </RadioGroup>
          </FormControl> */}
        </div>
        {products ? (
          <>
            <div className="d-flex flex-wrap" style={{ marginTop: "2%" }}>
              {currentPosts.map((product) => (
                <MediaCard product={product} key={product.id} />
              ))}
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div></div>
      <Pagination1 />
      <Carousel2 />
    </div>
  );
};

export default MainPage;
