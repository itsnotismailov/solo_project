import { TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { adminContext } from "../contexts/AdminContext";
import { Button } from "@mui/material";

const EditPage = () => {
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

  const { getProductToedit, productToEdit, saveEditedProduct } =
    useContext(adminContext);

  const params = useParams();

  useEffect(() => {
    getProductToedit(params.id);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="edit-page">
      <h2>Изменить пиццу</h2>
      {productToEdit ? (
        <Formik
          validationSchema={schema}
          onSubmit={(editedProduct) => {
            saveEditedProduct(editedProduct);
            navigate("/admin");
          }}
          initialValues={productToEdit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                style={{ width: "40%" }}
                label="Название "
                type="text"
                variant="standard"
                name="name"
                value={values.name}
                error={!!errors.name && touched.name}
                helperText={touched.name ? errors.name : ""}
                onChange={handleChange}
              />
              {/* <TextField
                style={{ width: "40%" }}
                label="Описание телефона"
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
                label="Вид"
                type="text"
                variant="standard"
                name="type"
                value={values.type}
                error={!!errors.type && touched.type}
                helperText={touched.type ? errors.type : ""}
                onChange={handleChange}
              />
              <Button
                style={{ width: "30%", marginTop: "3%" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Сохранить
              </Button>
            </form>
          )}
        </Formik>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default EditPage;
