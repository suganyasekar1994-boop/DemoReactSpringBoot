import React from "react";
import { X } from "lucide-react";
import "./EditProductOverlay.css";

const EditProductOverlay = ({ product, setProduct, updateProduct }) => {











  return (
    <div className="edit-overlay">
      <div className="edit-modal">
        {/* Header */}
        <div className="edit-modal-header">
          <div>
            <h2>Edit Product</h2>
            <p>Update the product information below</p>
          </div>

          <button onClick={() => setProduct(null)} className="edit-close-btn">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="edit-modal-body">
          <div className="edit-form-group">
            <label>Product Name</label>
            <input type="text" onChange={(e)=>setProduct({...product,name:e.target.value})} value={product?.name}  />
          </div>

          <div className="edit-form-group">
            <label>Category</label>
            <select  onChange={(e)=>setProduct({...product,category:e.target.value})} value={product?.category}>
              <option value={""}>Select category</option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"Accessories"}>Accessories</option>
              <option value={"Furniture"}>Furniture</option>
              <option value={"Stationery"}>Stationery</option>
            </select>
          </div>

          <div className="edit-form-row">
            <div className="edit-form-group">
              <label>Price</label>
              <input  onChange={(e)=>setProduct({...product,price:e.target.value})} value={product?.price} type="number"   />
            </div>

            <div className="edit-form-group">
              <label>Stock</label>
              <input  onChange={(e)=>setProduct({...product,stock:e.target.value})} value={product?.stock} type="number"   />
            </div>
          </div>

          <div className="edit-form-group">
            <label>Description</label>
            <textarea
             onChange={(e)=>setProduct({...product,description:e.target.value})}
            value={product?.description}
              rows="4"
              defaultValue="High performance laptop suitable for development and professional use."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="edit-modal-footer">
          <button onClick={() => setProduct(null)} className="edit-cancel-btn">
            Cancel
          </button>

          <button onClick={updateProduct} className="edit-save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProductOverlay;


