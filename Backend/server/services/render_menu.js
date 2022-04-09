const axios = require('axios');
const res = require('express/lib/response');

exports.homeRoutes = (req,res)=>{
    axios.get('http:localhost:3000/api/menus')
     .then(function (response) {
         res.render('list_menu', {users: response.data});
     })
     .catch(err =>{
         res.send(err);
     })
}

exports.add_menu = (req, res)=>{
    res.render('add_menu');
}

exports.update_menu = (req, res)=>{
    axios.get('http:localhost:3000/api/menus', {params: {id:req.query.id}})
     .then(function(userdata){
         res.render("update_menu", {user: userdata.data})
     })
     .catch(err=>{
         res.send(err);
     })
}