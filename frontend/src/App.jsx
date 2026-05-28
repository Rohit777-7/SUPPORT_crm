import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import { Toaster } from "react-hot-toast";

function App() {

    return (
        <BrowserRouter>
            <Toaster />

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/create"
                    element={<CreateTicket />}
                />

                <Route
                    path="/ticket/:id"
                    element={<TicketDetails />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;