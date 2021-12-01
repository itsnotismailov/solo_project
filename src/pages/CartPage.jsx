import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";

export default function CartPage() {
  const { getCart, cart, changeCountProduct } = React.useContext(clientContext);

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  return (
    <>
      {cart ? (
        <TableContainer className="cart-page" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "brown" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>Фото</TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Название
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Количество
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Сумма
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img width="100" src={item.image} alt="" />
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    <input
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        changeCountProduct(e.target.value, item.id)
                      }
                    />
                  </TableCell>
                  <TableCell align="right">{item.subPrice} сом</TableCell>
                </TableRow>
              ))}
              <TableRow style={{ backgroundColor: "brown" }}>
                <TableCell style={{ color: "white" }} colSpan={3} align="rigth">
                  Итого:
                </TableCell>
                <TableCell style={{ color: "white" }} colSpan={1} align="rigth">
                  {cart.totalPrice} сом
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
