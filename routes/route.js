const express=require('express');
const router=express.Router();


// Import the controller
const vehicleController = require('../controllers/vehicleController');

// Route to get vehicle data
router.get('/vehicle-data', vehicleController.getVehicleData);


module.exports=router;