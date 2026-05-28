import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreateTicket() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        customerName: "",
        customerEmail: "",
        subject: "",
        description: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/tickets", formData);

            toast.success("Ticket Created Successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");
        }
    };

    return (

       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-start py-10 px-5">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-2xl">
                <div className="text-center mb-8">

                    <h1 className="text-5xl font-bold text-white">
                        Create New Ticket
                    </h1>

                   <p className="text-gray-300 mt-3">
                        Fill in customer support details
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >

                    <input
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        className="bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="customerEmail"
                        placeholder="Customer Email"
                        className="bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        rows="5"
                        className="bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300"
                    >
                        Create Ticket
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CreateTicket;