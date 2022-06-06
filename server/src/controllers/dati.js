const Dato = require("../models/dato");
const db = require("../utils/db");
const io = require("../socket");

exports.postDato = (req, res, next) => {

    const ppm = req.body.ppm;
    const umidita = req.body.umidita;
    const temperatura = req.body.temperatura;
    
    const dato = {ppm: ppm, umidita:umidita, temperatura:temperatura, date:Date.now()};

    Dato.create({
        ppm: dato.ppm,
        umidita: dato.umidita,
        temperatura: dato.temperatura,
        date: dato.date
    })
    .then(result => {
        io.getIO().emit('dato', dato)
        res.status(201).json(dato)
    })
    .catch(err => res.status(500).json(err))
}

exports.getDati = (req,res,next) => {
    Dato.findAll().then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
}