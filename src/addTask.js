const {v4}=require('uuid');
const AWS=require('aws-sdk');

const addTask=async (event)=>{//en el event esta la info que me envian desde el cliente
    
    //conexion a dynamoDB
    const dynamoDB=new AWS.DynamoDB.DocumentClient();//creo una instancia de la clase DocumentClient para hacer la conexion a la DB. Se conecta usando las credenciales key id y secret key id que configure al principio
    
    const {title,description}=JSON.parse(event.body);//parseo el body del evento, lo convierto en un objeto y lo guardo en una variable
    const createdAt=new Date();
    const id=v4();

    const newTask={
        id,
        title,
        description,
        createdAt,
        done:false
    };
    
    //put me permite insertar datos en la tabla
    await dynamoDB.put({//si me paro encima de await me indica que el await no tiene efecto es por esto que agrego el .promise() al final para que me devuelva una promesa
        TableName:'TaskTable',
        Item:newTask
    }).promise();

    return {
        statusCode:200,
        body:JSON.stringify(newTask)
    }
}

module.exports={
    addTask
}