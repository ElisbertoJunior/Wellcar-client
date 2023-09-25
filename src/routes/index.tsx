import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Budget from "../pages/Budget";
import Products from "../pages/Products";
import Labor from "../pages/Labor";
import Reports from "../pages/Reports";
import ServiceOrder from "../pages/ServiceOrder";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/budgets" element={<Budget />} />
      <Route path="/labor" element={<Labor />} />
      <Route path="/products" element={<Products />} />
      <Route path="/report" element={<Reports />} />
      <Route path="/so" element={<ServiceOrder />} />
    </Router>
  );
};

export default Routes;
