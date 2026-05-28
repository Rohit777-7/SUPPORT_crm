const Ticket = require("../models/Ticket");

const createTicket = async (req, res) => {

    try {

        const count = await Ticket.countDocuments();

        const ticket = await Ticket.create({
            ticketId: `TKT-${count + 1}`,
            ...req.body
        });

        res.status(201).json(ticket);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTickets = async (req, res) => {

    try {

        const { search, status } = req.query;

        let query = {};

        if (status) {
            query.status = status;
        }

        if (search) {
            query.$or = [
                { customerName: { $regex: search, $options: "i" } },
                { customerEmail: { $regex: search, $options: "i" } },
                { subject: { $regex: search, $options: "i" } }
            ];
        }

        const tickets = await Ticket.find(query);

        res.json(tickets);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleTicket = async (req, res) => {

    try {

        const ticket = await Ticket.findById(req.params.id);

        res.json(ticket);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTicket = async (req, res) => {

    try {

        const updated = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );

        res.json(updated);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTicket,
    getTickets,
    getSingleTicket,
    updateTicket
};