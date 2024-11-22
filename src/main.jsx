import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import { allBlogsByCategoryLoader, allProductsLoader, categoryLoader } from './loder/blogLoder';
import CategoryBlogs from './components/CategoryBlogs';
import { createProduct } from './action/blogsAction';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    loader: categoryLoader,
    children: [
      {
        path: "/",
        element: <ProductList />,
        index: true,
        loader: allProductsLoader,
      },
      {
        path: "/create",
        element: <CreateProduct />,
        action: createProduct,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryBlogs />,
        loader: allBlogsByCategoryLoader,
      }


    ]

  }

],
  {
    future: {
      v7_relativeSplatPath: true,

    },
  },
);



createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);


  
