import { useEffect, useState } from "react";
// import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import { api } from "./api/api";
import CreateProduct from "./components/CreateProduct";

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    try {
      async function getData() {
        const conn = await api.get("/products");
        setProducts(conn.data);
        
        
      }

      getData();
      
    } catch (error) {
      console.log(error);
      
    }
  }, []);

  useEffect(() => {
    try {
      async function getData() {
        const conn = await api.get("/categories");
        setCategories(conn.data)
    
        
  
        
        
      }

      getData();
      
    } catch (error) {
      console.log(error);
      
    }
  }, []);



  return (
    <>
      <div className="grid bg-slate-100 p-6 max-w-screen-2xl mx-auto grid-cols-12 gap-4">
       
        <Sidebar categories={categories} />
        <CreateProduct />
      </div>
    </>
  )
}

export default App
