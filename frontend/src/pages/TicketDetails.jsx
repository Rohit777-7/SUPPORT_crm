import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function TicketDetails() {

    const { id } = useParams();

    const [ticket, setTicket] = useState(null);

    const [status, setStatus] = useState("");

    const [notes, setNotes] = useState("");

    const [loading, setLoading] = useState(false);

    const fetchTicket = async () => {

        try {

            const res = await API.get(`/tickets/${id}`);

            setTicket(res.data);

            setStatus(res.data.status);

            setNotes(res.data.notes);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchTicket();

    }, []);

    const updateTicket = async () => {

        try {

            setLoading(true);

            await API.put(`/tickets/${id}`, {
                status,
                notes
            });

            toast.success("Ticket Updated Successfully");

            fetchTicket();

        } catch (error) {

            console.log(error);

            toast.error("Update Failed");

        } finally {

            setLoading(false);
        }
    };

    if (!ticket) {

        return (

            <div className="min-h-screen bg-slate-900 flex justify-center items-center">

                <h1 className="text-white text-3xl">
                    Loading...
                </h1>

            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-5">

            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

                <div className="flex justify-between items-center mb-8">

                    <h1 className="text-4xl font-bold text-white">
                        {ticket.ticketId}
                    </h1>

                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">
                        {ticket.status}
                    </span>

                </div>

                <div className="space-y-6">

                    <div>

                        <p className="text-gray-400">
                            Customer Name
                        </p>

                        <h2 className="text-2xl font-semibold text-white">
                            {ticket.customerName}
                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-400">
                            Email
                        </p>

                        <h2 className="text-xl text-white">
                            {ticket.customerEmail}
                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-400">
                            Subject
                        </p>

                        <h2 className="text-xl text-white">
                            {ticket.subject}
                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-400">
                            Description
                        </p>

                        <p className="text-gray-200">
                            {ticket.description}
                        </p>

                    </div>

                </div>

                <div className="mt-10 flex flex-col gap-5">

                    <select
                        className="bg-white/10 text-white border border-white/20 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
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

                    <textarea
                        placeholder="Add Notes..."
                        className="bg-white/10 text-white placeholder-gray-300 border border-white/20 p-4 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-400"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />

                    <button
                        onClick={updateTicket}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                    >
                        {
                            loading
                            ? "Updating..."
                            : "Update Ticket"
                        }
                    </button>

                </div>

            </div>

        </div>
    );
}

export default TicketDetails;