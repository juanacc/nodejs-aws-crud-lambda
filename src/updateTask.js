const AWS = require('aws-sdk');

const updateTask = async event => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const {done, title, description} = JSON.parse(event.body);
    await dynamoDB.update({
        TableName: 'TaskTable',
        Key: {id},
        UpdateExpression: 'set done=:done, title=:title, description=:description', //coloco el nombre de los parametros que tengo que pasarle. Aca le digo que voy a establecer un nuevo valor a la propiedad done, el cual sera el que viene en :done
        ExpressionAttributeValues: {
            ':done': done,
            ':title': title,
            ':description': description
        },
        ReturnValues: 'ALL_NEW'
    }).promise();

    return{
        status: 200,
        body: JSON.stringify({
            message: 'Task updated succesfully'
        })
    }
}

module.exports={
    updateTask
}