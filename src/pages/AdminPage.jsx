import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { adminContext } from "../contexts/AdminContext";
import CustomizedTables from "../components/Table";

const AdminPage = () => {
  const { clearState } = useContext(adminContext);

  useEffect(() => {
    clearState();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/admin/add">
          <Button
            style={{
              margin: "20px",
            }}
            variant="contained"
          >
            Добавить 
          </Button>
        </Link>
      </div>
      <div>
        <CustomizedTables />
      </div>
    </>
  );
};

export default AdminPage;
