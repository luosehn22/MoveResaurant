const axios = require('axios');
const handleTruck = async (req, res) => {
    try {
        // get database data
        const response = await axios.get('https://data.sfgov.org/resource/rqzj-sfat.json');

        // format the data
        const moveResaurant = response.data
            .map(truck => ({
                name: truck.applicant,
                location: truck.location,
                cuisine: truck.fooditems,
            }));

        // return data to frontend
        res.json(moveResaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = handleTruck;