import { TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { adminContext } from "../contexts/AdminContext";
import { Button } from "@mui/material";

const AddPage = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(3, "Минимальное количество символов 3")
      .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    // description: yup
    //   .string()
    //   .min(10, "Минимальное количество символов 10")
    //   .max(255, "Максимальное количество символов 255")
    //   .required("Поле обязательно для заполнения"),
    image: yup
      .string()
      //   .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    price: yup
      .number()
      .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    type: yup
      .string()
      //   .min(3, "Минимальное количество символов 3")
      //   .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
  });

  const { addProduct } = useContext(adminContext);

  const navigate = useNavigate();

  let handleSubmit = (product) => {
    addProduct(product);
    navigate("/admin");
  };

  return (
    <div className="add-page">
      <h2>Добавить </h2>
      <Formik
        validationSchema={schema}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
        initialValues={{
          name: "",
          image: "",
          price: "",
          type: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form className="forma" onSubmit={handleSubmit}>
            <TextField
              label="Название "
              type="text"
              variant="standard"
              name="name"
              value={values.name}
              error={!!errors.name && touched.name}
              helperText={touched.name ? errors.name : ""}
              onChange={handleChange}
              className="aidar"
            />
              {/* <TextField
                style={{ width: "40%" }}
                label="Описание товара"
                type="text"
                variant="standard"
                name="description"
                value={values.description}
                error={!!errors.description && touched.description}
                helperText={touched.description ? errors.description : ""}
                onChange={handleChange}
              /> */}
            <TextField
              style={{ width: "40%" }}
              label="Фото "
              type="text"
              variant="standard"
              name="image"
              value={values.image}
              error={!!errors.image && touched.image}
              helperText={touched.image ? errors.image : ""}
              onChange={handleChange}
            />
            <TextField
              style={{ width: "40%" }}
              label="Цена "
              type="number"
              variant="standard"
              name="price"
              value={values.price}
              error={!!errors.price && touched.price}
              helperText={touched.price ? errors.price : ""}
              onChange={handleChange}
            />
            <TextField
              style={{ width: "40%" }}
              label="Вид "
              type="text"
              variant="standard"
              name="type"
              value={values.type}
              error={!!errors.type && touched.type}
              helperText={touched.type ? errors.type : ""}
              onChange={handleChange}
            />
            <Button
              style={{ marginTop: "20px", width: "20%" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Добавить 
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPage;
