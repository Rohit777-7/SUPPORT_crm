import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div className="bg-black/90 backdrop-blur-lg text-white px-8 py-4 flex justify-between items-center shadow-xl">

            <h1 className="text-4xl font-bold tracking-wide">
                Support CRM
            </h1>

            <div className="flex gap-6 items-center">

                <Link
                    to="/"
                    className="text-lg hover:text-blue-400 transition"
                >
                    Home
                </Link>

                <Link
                    to="/create"
                    className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                    Create Ticket
                </Link>

            </div>

        </div>
    );
}

export default Navbar;