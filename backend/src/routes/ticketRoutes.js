const express = require("express");

const {
    createTicket,
    getTickets,
    getSingleTicket,
    updateTicket
} = require("../controllers/ticketController");

const router = express.Router();

router.post("/", createTicket);

router.get("/", getTickets);

router.get("/:id", getSingleTicket);

router.put("/:id", updateTicket);

module.exports = router;