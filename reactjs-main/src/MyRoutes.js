import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import AxiosExample from "./components/pages/AxiosExample";
import Cart from "./components/pages/Cart";
import ComponentA from "./components/pages/ComponentA";
import Contact from "./components/pages/Contact";
import Counter from "./components/pages/Counter";
import Data from "./components/pages/Data";
import Display from "./components/pages/Display";
import EmailConformation from "./components/pages/EmailConformation";
import FAQ from "./components/pages/FAQ";
import FetchData from "./components/pages/FetchData";
import { Forgetpassword } from "./components/pages/Forgetpassword";
import { ResetPassword } from "./components/pages/ResetPassword";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Products from "./components/pages/Products";
import Register from "./components/pages/Register";
import Counter2 from "./components/redux-example/Counter2";
import Games from "./components/redux-example/Games";
import First from "./First";
import Second from "./Second";
import { Dashboard } from "./admin/Dashboard";
import { AdminCategory } from "./admin/AdminCategory";
import AddCategory from "./admin/AddCategory";
import UpdateCategory from "./admin/UpdateCategory";
import { AdminProduct } from "./admin/AdminProduct";
import UpdateProduct from "./admin/UpdateProduct";
import AddProduct from "./admin/AddProduct";
import ProductDetails from "./admin/ProductDetails";
import UserProfile from "./user/UserProfile";
import Users from "./admin/Users";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/category/add" element={<AddCategory />} />

        <Route path="/admin/category/update/:id" element={<UpdateCategory />} />

        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/admin/product/add" element={<AddProduct />} />
        <Route path="/admin/product/update/:id" element={<UpdateProduct />} />
        <Route path="/admin/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/conform/:token" element={<EmailConformation />} />

        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        {/* hooks */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/data" element={<Data />} />

        <Route path="/component" element={<ComponentA />} />
        <Route path="/display" element={<Display />} />

        <Route path="/fetchdata" element={<FetchData />} />
        <Route path="/axios" element={<AxiosExample />} />

        {/* Redux Example */}
        <Route path="/count" element={<Counter2 />} />
        <Route path="/game" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
