import { api } from "../api/api";

async function categoryLoader() {
    const conn = await api.get("/categories");
    return conn.data;
}

async function allProductsLoader() {
    const conn = await api.get("/products");
    return conn.data;
}

async function allBlogsByCategoryLoader({ params }) {
    // console.log(params.categoryName);

    const conn = await api.get("/products");
    const updateData = await conn.data.filter(item => {
        return item.category === params.categoryName;
    });


    
    return updateData;
}

export {categoryLoader, allProductsLoader, allBlogsByCategoryLoader}



















// import { api } from "../api/api";

// async function categoryLoader() {
//     const conn = await api.get("/categories");
//     return conn.data;
 
// }

// async function allProductsLoader(test) {

//     console.log(test);
    

//     const conn = await api.get("/products");
//     return conn.data;
// }

// async function allBlogsByCategoryLoader({params}) {
//     console.log(params.categoryName);
  
    
//     const conn = await api.get("/products");
//     const updateData = await conn.data.filter(item => {
//         console.log(item.category);
//         return item.category === params.categoryName;
//     });
    
    
//     // console.log(updateData);
//     return updateData;
    
// }
// export {categoryLoader, allProductsLoader, allBlogsByCategoryLoader}