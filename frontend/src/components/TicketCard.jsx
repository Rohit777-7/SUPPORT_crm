import { Link } from "react-router-dom";

function TicketCard({ ticket }) {

    const getStatusColor = () => {

        if (ticket.status === "Open") {
            return "bg-red-500/20 text-red-300";
        }

        if (ticket.status === "In Progress") {
            return "bg-yellow-500/20 text-yellow-300";
        }

        return "bg-green-500/20 text-green-300";
    };

    return (

        <Link to={`/ticket/${ticket._id}`}>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-5 hover:scale-[1.02] transition duration-300">

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold text-white">
                        {ticket.ticketId}
                    </h2>

                    <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor()}`}
                    >
                        {ticket.status}
                    </span>

                </div>

                <p className="font-semibold text-gray-200 text-lg">
                    {ticket.customerName}
                </p>

                <p className="text-gray-400 mt-2">
                    {ticket.subject}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                    {
                        new Date(ticket.createdAt)
                        .toLocaleDateString()
                    }
                </p>

            </div>

        </Link>
    );
}

export default TicketCard;