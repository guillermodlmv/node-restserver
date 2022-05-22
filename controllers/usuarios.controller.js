const { response : res } = require('express');


const usuariosGet = (req, res) => {
  const { nombre, apykey } = req.query;
  res.json({ 
    msg: 'get API - Controlador',
    nombre,
    apykey
  });
};

const usuariosPut = (req, res) => {

  const { id } = req.params;
  
  res.json({ 
    msg: 'put API - Controlador',
    id
  });
};

const usuariosPost = (req, res) => {

  const { nombre, edad } = req.body;

  res.json({ 
    msg: 'post API - Controlador',
    nombre,
    edad
  });

};

const usuariosPatch = (req, res) => {
  res.json({ 
    msg: 'patch API - Controlador'
  });
};

const usuariosDelete = (req, res) => {
  res.json({ 
    msg: 'delete API - Controlador'
  });
};


module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete
};