

function Sidebar({categories}) {
    return (
        <>
         <div className="col-span-3 bg-white p-3">
          <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
          <ul className="sticky top-4">
            {categories.map((category) => (
          <li key={category.id}>
              <a
                className="block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize "
                href="#">
                {category.title}
              </a>
            </li>

            ))}
          </ul>
        </div>
        </>
    );
}

export default Sidebar;