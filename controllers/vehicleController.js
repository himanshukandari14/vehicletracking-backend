const path = require('path');
const fs = require('fs').promises; // Use promises for better async handling

// Controller function to get vehicle data
const getVehicleData = async (req, res) => {
  try {
    // Define the path to the JSON data file
    const filePath = path.join(__dirname, '../data/vehicleData.json');
    
    // Read the file and parse JSON data
    const data = await fs.readFile(filePath, 'utf8');
    const vehicleData = JSON.parse(data);
    
    // Send the parsed JSON data as a response
    res.status(200).json(vehicleData);
  } catch (error) {
    // Handle errors: log and respond with appropriate status
    console.error("Error retrieving vehicle data:", error);
    res.status(500).json({ message: "Failed to retrieve vehicle data." });
  }
};

module.exports = { getVehicleData };
