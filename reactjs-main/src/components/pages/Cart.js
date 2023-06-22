import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h3 className="text-center">Cart Items</h3>
        <table className="table table-bordered table-hover text-center align-middle">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Image</th>
              <th>Product Information</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src="./logo192.png" alt="" style={{ height: "100px" }} />
              </td>
              <td>
                <h4>Product Name</h4>
                <h5>Product Price</h5>
              </td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-warning">
                    <i className="bi bi-pencil"></i>Edit
                  </button>
                  <button className="btn btn-danger">
                    Remove <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
