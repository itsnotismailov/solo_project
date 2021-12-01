import React, { useContext } from "react";
import { Button } from "@mui/material";
import { clientContext } from "../contexts/ClientContext";

const Pagination1 = () => {
  const { totalPosts, postPerPage, handlePage, currentPage } =
    useContext(clientContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination" style={{ marginTop: "2%" }}>
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <Button
              // variant="outlined"
              style={{
                backgroundColor: page === currentPage ? "green" : "gray",
                color: "white",
                margin: "5px",
              }}
              onClick={() => handlePage(page)}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination1;
