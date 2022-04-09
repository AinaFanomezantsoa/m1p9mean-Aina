const res = require('express/lib/response');
const Menudb = require('../model/model.menu');
var Userdb = require('../model/model.menu');

//create and save new menu
exports.create = (req,res)=>{
    //validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    //new menu
    const menu = new Menudb({
        nom_plat: req.body.nom_plat,
        prix_plat: req.body.prix_plat,
        descri_plat: req.body.descri_plat
    })

    //save menu in the db
    menu
     .save(menu)
     .then(data=>{
         res.redirect('/add-menu');
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message || "Some error occured while creating a create operation"
         });
     });
}

//retrieve and return all menu/ retrive and return a single menu
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;

        Menudb.findById(id)
         .then(data =>{
             if (!data) {
                 res.status(400).send({message: "Not found menu with id" +id})
             } else {
                 res.send(data)
             }
         })
         .catch(err=>{
             res.status(500).send({message: "Error retrieving menu with id" +id})
         })
    }else{
        Menudb.find()
         .then(user =>{
             res.send(user)
         })
         .catch(err=>{
             res.status(500).send({message: err.message || "Error Occured while retrieving menu infomation"})

         })
    }
}

//Update a new identified by menu id
exports.update=(req, res)=>{
    if(!req.body){
        return res
         .status(400)
         .send({message: "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
     .then(data =>{
         if (!data) {
             res.status(404).send({message: `Cannot Update user with ${id}. Maybe user not found!`})
         } else {
             res.send(data)
         }
     })
     .catch(err =>{
         res.status(500).send({message: "Error Update user information"})
     })
}

//Delete a menu with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findOneAndDelete(id)
     .then(data =>{
         if (!data) {
             res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
         } else {
             res.send({
                 message: "Userwas deleted successfully!"
             })
             
         }
     })
     .catch(err =>{
         res.status(500).send({
             message: "Could not delete User with id="+id
         });
     });
}