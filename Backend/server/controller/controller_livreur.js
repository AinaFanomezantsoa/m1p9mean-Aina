const res = require('express/lib/response');
const Livreurdb = require('../model/model.livreur');

exports.create = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content can not be empty!"});
        return;
    }

    const livreur = new Livreurdb({
        nom: req.body.nom,
        num: req.body.num,
        transport: req.body.transport
    })

    livreur
     .save(livreur)
     .then(data=>{
         res.redirect('/add-livreur');
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message || "Some error occured while creating a create operation"
         });
     });
}
