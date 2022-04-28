"use strict";

//event trae info del cliente, metodo, incluso trae los parametros que se pasan por url, etc
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola mundo!",
        input: event,
      },
      null,
      2
    ),
  };
};
