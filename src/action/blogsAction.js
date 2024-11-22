import { redirect } from "react-router-dom";
import { api } from "../api/api";

async function createProduct({request }) {


    const formData = await request.formData();
    const formObjectData = Object.fromEntries(formData);
    api.post('/products', formObjectData)


    console.log(formObjectData);
    

 
    
    
    return redirect('/');
}

export { createProduct };