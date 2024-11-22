
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Sidebar from './Sidebar';


function Root() {

  const categories = useLoaderData();
  const Navigation = useNavigation();
  console.log(Navigation);
  
    return (
        <div className="grid bg-slate-100 p-6 max-w-screen-2xl mx-auto grid-cols-12 gap-4">
        <Sidebar categories={categories} />
        <Outlet />
      </div>
    );
}

export default Root;

 
  

// start from here class video 47 mints passed ****************   