import React from "react";
import { X, Trash2, AlertTriangle } from "lucide-react";
import "./DeleteConfirmation.css";

const DeleteConfirmation = ({product,setProduct,deleteProduct}) => {



  return (
    <div className="delete-overlay">
      <div className="delete-modal">

        {/* Close */}
        <button onClick={()=>setProduct(null)} className="delete-close-btn">
          <X size={19} />
        </button>

        {/* Icon */}
        <div className="delete-icon">
          <Trash2 size={24} />
        </div>

        {/* Content */}
        <div className="delete-content">
          <h2>Delete Product?</h2>

          <p>
            Are you sure you want to delete{" "}
            <strong>{product?.name}</strong>? This action cannot be undone.
          </p>
        </div>

        {/* Warning */}
        <div className="delete-warning">
          <AlertTriangle size={17} />
          <span>
            All information related to this product will be removed.
          </span>
        </div>

        {/* Actions */}
        <div className="delete-actions">
          <button onClick={()=>setProduct(null)} className="delete-cancel-btn">
            Cancel
          </button>

          <button onClick={deleteProduct} className="delete-confirm-btn">
            <Trash2 size={16} />
            Delete Product
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteConfirmation;