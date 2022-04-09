const axios = require('axios');
const res = require('express/lib/response');

exports.homeRoutes = (req,res)=>{
    axios.get('http:localhost:3000/api/livreurs')
     .then(function (respose) {
        res.render('list_livreur', {users: response.data});         
     })
     .catch(err =>{
         res.send(err);
     })
}

exports.add_livreur = (req, res)=>{
    res.render('add_menu');
}

exports.update_livreur = (res,req)=>{
    axios.get('http:localhost:3000/api/livreurs', {params: {id:req.query.id}})
     .then(function (userdata) {
         res.render("update_livreur", {user: userdata.data})
     })
     .catch(err=>{
         res.send(err);
     })
}