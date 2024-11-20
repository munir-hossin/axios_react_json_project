
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const categories = [
    {
      "id": "1",
      "title": "bed"
    },
    {
      "id": "2",
      "title": "light"
    },
    {
      "id": "3",
      "title": "wall clock"
    },
    {
      "id": "4",
      "title": "mirror"
    },
    {
      "id": "5",
      "title": "dining table"
    }
  ]

function Root() {
    return (
        <div className="grid bg-slate-100 p-6 max-w-screen-2xl mx-auto grid-cols-12 gap-4">
        <Sidebar categories={categories} />
        <Outlet />
      </div>
    );
}

export default Root;