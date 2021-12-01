import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { adminContext } from "../contexts/AdminContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const { getProduct, products, deleteProduct } =
    React.useContext(adminContext);

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {products ? (
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Фото пиццы</StyledTableCell>
                <StyledTableCell align="right">Название</StyledTableCell>
                <StyledTableCell align="right">Цена</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      style={{ maxWidth: "100px" }}
                      src={item.image}
                      alt=""
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.name}</StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                  <StyledTableCell align="right">{item.type}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to={`/admin/edit/${item.id}`}>
                      <Button variant="contained" color="success">
                        Изменить
                      </Button>
                    </Link>
                    <br />
                    <Button
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                      style={{ marginTop: "5px" }}
                      variant="contained"
                      color="error"
                    >
                      Удалить
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
