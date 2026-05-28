import { useEffect, useState } from "react";
import API from "../services/api";
import TicketCard from "../components/TicketCard";

function Home() {

    const [tickets, setTickets] = useState([]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("");

    const [loading, setLoading] = useState(false);

    const fetchTickets = async () => {

        try {

            setLoading(true);

            const res = await API.get(
                `/tickets?search=${search}&status=${status}`
            );

            setTickets(res.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        fetchTickets();

    }, [search, status]);

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-5">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-10">

                    <h1 className="text-5xl font-bold text-white">
                        Support Dashboard
                    </h1>

                    <p className="text-gray-300 mt-3 text-lg">
                        Manage and track customer support tickets
                    </p>

                </div>

                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">

                    <div className="flex flex-col md:flex-row gap-4 mb-8">

                        <input
                            type="text"
                            placeholder="Search tickets..."
                            className="bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl w-full outline-none focus:ring-2 focus:ring-blue-400"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <select
                            className="bg-white/10 text-white border border-white/20 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option className="text-black" value="">
                                All Status
                            </option>

                            <option className="text-black" value="Open">
                                Open
                            </option>

                            <option className="text-black" value="In Progress">
                                In Progress
                            </option>

                            <option className="text-black" value="Closed">
                                Closed
                            </option>

                        </select>

                    </div>

                    {
                        loading ? (

                            <h1 className="text-center text-white text-2xl">
                                Loading...
                            </h1>

                        ) : tickets.length === 0 ? (

                            <h1 className="text-center text-gray-300 text-2xl">
                                No Tickets Found
                            </h1>

                        ) : (

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {
                                    tickets.map((ticket) => (

                                        <TicketCard
                                            key={ticket._id}
                                            ticket={ticket}
                                        />
                                    ))
                                }

                            </div>

                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default Home;