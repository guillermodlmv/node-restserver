const express = require('express');
const cors = require('cors');
class Server {

  constructor(){
    this.app = express();
    this.port= process.env.PORT;
    this.usuariosPath = '/api/usuarios'

    //Middlewares
    this.middelwares();

    //Rutas de mi APP
    this.router();
  }

  middelwares(){

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body para
    this.app.use( express.json() );

    //Directorio publico
    this.app.use( express.static('public'));
    
  }

  router(){
    this.app.use( this.usuariosPath, require('../routes/usuarios.router'));
  }

  listen(){
    this.app.listen( this.port, () => {
      console.log(`Running in the por ${ this.port }`);
    });
  }

}

module.exports = Server;