//program entrance
const express = require('express');
const requestRestaurants = require('./router/resaurantModule');
const app = express();

//router register
requestRestaurants(app);

// launch server
app.listen(3000, () => {
  console.log('server is ready');
});