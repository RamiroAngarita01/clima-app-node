const axios = require('axios');
const getClima = async (lat,lon)=>{
    // const url ='';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=644240381bbaed72cf6ab5198c484b29&units=metric`);
return resp.data
}

module.exports={
    getClima,
}