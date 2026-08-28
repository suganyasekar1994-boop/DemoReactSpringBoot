import React, { useEffect, useState } from "react";
import { Search, Pencil, Trash2, Plus } from "lucide-react";
import "./ProductManagement.css";
import { toast } from "react-toastify";
import DeleteConfirmation from "./DeleteConfirmation";
import EditProductOverlay from "./EditProductOverlay";

const dummyProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    stock: 12,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 1200,
    stock: 35,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 3500,
    stock: 18,
  },
  {
    id: 4,
    name: "Monitor",
    category: "Electronics",
    price: 18000,
    stock: 8,
  },
];

const ProductManagement = () => {
  const [products, setProducts] = useState(() => {
    let lp = localStorage.getItem("myProducts");
    return lp ? JSON.parse(lp) : [];
  });

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
  });

  useEffect(() => {
    storeIntoLocalStorage();
  }, [products]);

  function storeIntoLocalStorage() {
    localStorage.setItem("myProducts", JSON.stringify(products));
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addProduct() {
    console.log(form);

    if (form.name == "" || form.price == 0 || form.category == "") {
      toast.warn("Fill the all required fields");
      return;
    }

    try {
      let idx = 0;

      if (products.length > 0) {
        let lp = products[products.length - 1];
        idx = lp.id;
      }

      let pro = {
        ...form,
        id: idx + 1,
      };

      setProducts([...products, pro]);
      setForm({
        name: "",
        category: "",
        price: 0,
        stock: 0,
        description: "",
      });

      toast.success("Products added successfully");
    } catch (error) {
      console.log(error);
    }
  }

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p, i) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  const [delPro, setDelPro] = useState(null);


  function deleteProduct(){

    if(!delPro){
      toast.warn('Select the Product')
      return; 
    }

    try {

      let remaningProduct = products.filter((p,i)=> p.id != delPro.id)

      setProducts(remaningProduct);
      setDelPro(null);
      toast.success(`${delPro.name} Deleted Successfully`)
      
    } catch (error) {
      
    }
  }


   const [uptPro, setUptPro] = useState(null);


   function updateProduct() {
     if(!uptPro){
      toast.warn('Select the Product')
      return; 
    }

    try {
      
      let newProducts= products.map((p)=>{
        return p.id == uptPro.id ? uptPro : p ;
      })

      setProducts(newProducts);

      setUptPro(null);

      toast.success(`${uptPro.name} Updated successfully....`)


    } catch (error) {
      
    }

   }




  return (
    <div className="product-page">
      <div className="product-container">
        {/* Header */}
        <div className="product-header">
          <div>
            <h1>Product Management</h1>
            <p>Manage your products and inventory</p>
          </div>

          <button className="add-product-btn">
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Main Content */}
        <div className="product-content">
          {/* LEFT - FORM */}
          <div className="product-form-card">
            <div className="card-title">
              <h2>Add Product</h2>
              <p>Enter product details below</p>
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                onChange={handleChange}
                value={form.name}
                name="name"
                placeholder="Enter product name"
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                onChange={handleChange}
                value={form.category}
              >
                <option value={""}>Select category</option>
                <option value={"Electronics"}>Electronics</option>
                <option value={"Accessories"}>Accessories</option>
                <option value={"Furniture"}>Furniture</option>
                <option value={"Stationery"}>Stationery</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  onChange={handleChange}
                  value={form.price}
                  name="price"
                  placeholder="₹ 0.00"
                />
              </div>

              <div className="form-group">
                <label>Stock</label>
                <input
                  value={form.stock}
                  name="stock"
                  onChange={handleChange}
                  type="number"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={form.description}
                name="description"
                onChange={handleChange}
                rows="4"
                placeholder="Enter product description"
              />
            </div>

            <button onClick={addProduct} className="save-product-btn">
              Add Product
            </button>
          </div>

          {/* RIGHT - PRODUCT LIST */}
          <div className="product-list-card">
            {/* List Header */}
            <div className="list-header">
              <div>
                <h2>Products</h2>
                <span>{products.length} products</span>
              </div>

              <div className="search-box">
                <Search size={18} />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Products */}
            <div className="product-list">
              {filteredProducts.map((product) => (
                <div className="product-item" key={product.id}>
                  {/* Product Info */}
                  <div className="product-info">
                    <div className="product-avatar">
                      {product.name.charAt(0)}
                    </div>

                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.category}</p>
                      {/* <p>{product.description}</p> */}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="product-details">
                    <div className="product-price">
                      ₹{product.price.toLocaleString("en-IN")}
                    </div>

                    <div
                      className={`stock-badge ${
                        product.stock <= 10 ? "low-stock" : "in-stock"
                      }`}
                    >
                      {product.stock} in stock
                    </div>
                  </div>

                  {/* Action Icons */}
                  <div className="product-actions">
                    <button onClick={()=>setUptPro(product)} className="icon-btn edit-btn" title="Edit">
                      <Pencil size={17} />
                    </button>

                    <button onClick={()=>setDelPro(product)} className="icon-btn delete-btn" title="Delete">
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {
          delPro && <DeleteConfirmation deleteProduct = {deleteProduct} product={delPro} setProduct={setDelPro}  />
        }

        {
          uptPro && <EditProductOverlay updateProduct = {updateProduct} product={uptPro} setProduct={setUptPro}/>
        }
        
      </div>
    </div>
  );
};

export default ProductManagement;