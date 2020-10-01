

const request = require('request');


function Peticion(personaje){
request('https://dragon-ball-api.herokuapp.com/api/character/'+personaje, function (error, response, body){
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
   // console.log('body:', body);

   

    var obj = JSON.parse(body);

    console.log("Nombre: "+ obj.name);
    console.log("Especie: "+ obj.species);
    console.log("Planeta de Origen: "+ obj.originPlanet);
    console.log(obj.image);
    
});

}

Peticion("Gohan");