const mongoose = require('mongoose');

var livreurschema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    num:{
        type: String,
        required: true,
        unique: true
    },
    transport: String
})

const Livreurdb = mongoose.model('livreurdb', livreurschema);

module.exports = Livreurdb;