const axios = require('axios');
const getLugarLatlg = async(direccion)=>{
    const encodedUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        // timeout: 1000,
        headers: {'X-RapidAPI-Host':'devru-latitude-longitude-find-v1.p.rapidapi.com',
                  'X-RapidAPI-Key':'0cdc6c8b43msh3f0963fe7533bf4p1831f6jsn4b1a40d25a4f'}
      })
  const resp = await instance.get();
 if(resp.data.Results.length ===0){
     throw new Error(`No hay resultados para ${direccion}`);
 }
 const data = resp.data.Results[0];
 const dir = data.name;
 const lat = data.lat;
 const lng = data.lon;
    return {
        dir,
        lat,
        lng
    }
}

module.exports={
    getLugarLatlg,
}

 