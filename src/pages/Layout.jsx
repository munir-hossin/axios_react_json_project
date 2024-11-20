import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <ul className="flex justify-center">
                        <li>
                            <Link className="p-3 bg-green-600 mx-2 text-white" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="p-3 bg-green-600 mx-2 text-white" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="p-3 bg-green-600 mx-2 text-white" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="p-3 bg-green-600 mx-2 text-white" to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="h-64">
                <h1 className="text-2xl">page content Below</h1>

                <Outlet />
            </main>
            <footer className="text-center">
                <p>This is spacial Footer </p>
            </footer>
        </div>
    );
}

