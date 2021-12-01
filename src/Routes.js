import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdminContextProvider from "./contexts/AdminContext";
import AuthContextProvider from "./contexts/AuthContext";
import ClientContextProvider from "./contexts/ClientContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
import CreditCardPage from "./pages/CreditCard/CreditCardPage";
import OrderPage from "./pages/OrderPage";

const MyRoutes = () => {
  return (
    <AuthContextProvider>
      <ClientContextProvider>
        <AdminContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="admin/add" element={<AddPage />} />
              <Route path="/admin/edit/:id" element={<EditPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/product/:id" element={<DetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/credit/card" element={<CreditCardPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AdminContextProvider>
      </ClientContextProvider>
    </AuthContextProvider>
  );
};

export default MyRoutes;
