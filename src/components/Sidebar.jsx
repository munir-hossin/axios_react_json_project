
import { Link, NavLink } from "react-router-dom";

function Sidebar({ categories }) {
  return (
    <>
      <div className="col-span-3 bg-white p-3">
        <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
        <ul className="sticky top-4">
          {categories.map((category) => (
            <li key={category.id}>
              {/* Fixed: Use Link component instead of lowercase link */}
              <NavLink
                to={`/category/${category.title}`} // Example route
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "active block p-2 bg-green-600 text-white rounded mb-2 capitalize"
                    : isPending
                      ? "pending block p-2 bg-red-600 hover:text-white rounded mb-2 capitalize "
                      : "block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize"
                }

                }

              // className="block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize"
              >
                {category.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Link
            className="py-2 px-2 mt-5 bg-green-500 text-white mr-2"
            to="/"
          >
            Go Home
          </Link>
          <Link
            className="py-2 px-2 mt-5 bg-red-500 text-white"
            to="/create"
          >
            Create Product
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;























// import { Link } from "react-router-dom";


// function Sidebar({categories}) {
//     return (
//         <>
//          <div className="col-span-3 bg-white p-3">
//           <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
//           <ul className="sticky top-4">
//             {categories.map((category) => (
//           <li key={category.id}>
//             {/* error from this link */}
//             <link
//   className="block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize"
//   to=""
// >
//   {category.title}
// </link>
//             </li>

//             ))}
//           </ul>
//          <div className="mt-5">
//          <Link className="py-2 px-2 mt-5 bg-green-500 text-white mr-2" to="/">Go Home</Link>
//          <Link className="py-2 px-2 mt-5 bg-red-500 text-white" to="/create">Create Product</Link>
//          </div>
//         </div>
//         </>
//     );
// }

// export default Sidebar;