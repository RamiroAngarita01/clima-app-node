const lugar = require('./lugar/lugar');
const clima= require('./clima/clima');
const argv = require('./config/yargs').argv;
const color = require('colors');
let direccion = argv.direccion;
const getinfo = async(direccion)=>{
    try{
        let RPTlugar = await lugar.getLugarLatlg(direccion);
        let RPTclima = await clima.getClima(RPTlugar.lat,RPTlugar.lng);
       
        return `${RPTlugar.dir}  temperatura  de: ${RPTclima.main.temp}.`.green;
    }catch(err) {
       console.log(`No se pudo encontrar la informacion${err}`);
    } 


}
getinfo(direccion).then(resp=>{
    console.log(resp);
}).catch(err=>{
    console.log(`ERROR!!!${err}`);
})


    
    


