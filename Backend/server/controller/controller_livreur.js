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

//retirve and return all livreur/ retrive and return a single livreur
exports.find = (req, res)=>{
    if (req.query.id) {
        const id = req.query.id;

        Livreurdb.findById(id)
         .then(data =>{
             if (!data) {
                 res.status(400).send({message: "Not found Livreur with id" +id})
             } else {
                 res.send(data)
             }
         })
         .catch(err=>{
             res.status(500).send({message: "Error retrieving livreur with id" +id})
         })
    } else {
        Livreurdb.find()
         .then(user =>{
             res.send(user)
         })
         .catch(err=>{
             res.status(500).send({message: err.message || "Error Occured while retrieving Livreur information"})
         })
    }
}

//update Livreur
exports.update = (req, res)=>{
    if (!req.body) {
        return res
         .status(400)
         .send({message: "data to update can not be empty!"})
    }

    const id = req.params.id;
    Livreurdb.findByIdAndUpdate(id, req.body, {useFindAndMModify: false})
     .then(data=>{
         if(!data){
             res.status(404).send({message: `Cannot Update livreur with ${id}. Maybe livreur not found`})
         }else{
             res.send(data)
         }
     })
     .catch(err =>{
         res.status(500).send({message: "Error Update livreur information"})
     })
}

//Delete a livreur
exports.delete = (req, res)=>{
    const id= req.params.id;

    Livreurdb.findOneAndDelete(id)
     .then(data =>{
         if (!data) {
             res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
         } else {
             res.se,d({
                 message: "Livreur was deleted successfully!"
             })
             
         }
     })
     .catch(err =>{
         res.status(500).send({
             message: "Could not delete Livreur with id=" +id
         });
     });
}