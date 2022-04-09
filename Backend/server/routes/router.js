const express = require('express');
const route = express.Router();

const services = require('../services/render');
const services_menu = require('../services/render_menu');
const services_livreur = require('../services/render_livreur');
const controller = require('../controller/controller');
const controller_menu = require('../controller/controller_menu');
const controller_livreur= require('../controller/controller_livreur')

/**
 * @description Root Route
 * @method GET
 */
route.get('/', services.homeRoutes);

/**
 * @description add_user
 * @method GET/ add_user
 */

route.get('/add-user', services.add_user);

/**
 * @description update_user
 * @method GET/update_user
 */

route.get('/update-user', services.update_user);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


//Menu du resto
route.get('/list-menu', services_menu.homeRoutes)
route.get('/add-menu', services_menu.add_menu);
route.get('/update-menu', services_menu.update_menu);

//API menu
route.post('/api/menus', controller_menu.create);
route.get('/api/menus', controller_menu.find);
route.put('/api/menus/:id', controller_menu.update);
route.put('/api/menus/:id', controller_menu.delete);

//livreur 
route.get('/list-livreur', services_livreur.homeRoutes);
route.get('/add-livreur', services_livreur.add_livreur);
route.get('/update-livreur', services_livreur.update_livreur);

//API livreur
route.post('/api/menus', controller_menu.create);
module.exports = route