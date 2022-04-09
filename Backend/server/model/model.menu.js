const mongoose = require('mongoose');

var menuschema = new mongoose.Schema({
    nom_plat:{
        type: String,
        required: true
    },
    prix_plat:{
        type: String,
        required: true,
        unique: true
    },
    descri_plat: String
})

const Menudb = mongoose.model('menudb', menuschema);

module.exports = Menudb;