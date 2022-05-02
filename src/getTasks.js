const AWS=require('aws-sdk');

const getTasks=async(event)=>{
    const dynamoDB=new AWS.DynamoDB.DocumentClient();

    //el metodo scan es como hacer un select * from
    const result=await dynamoDB.scan({
        TableName:'TaskTable'
    }).promise();

    const tasks=result.Items;

    return {
        status:200,
        body:{tasks}
    }
}

module.exports={
    getTasks
}

// const AWS = require("aws-sdk");

// const getTasks = async (event) => {
//   const dynamodb = new AWS.DynamoDB.DocumentClient();
//   //el metodo scan es como hacer un select * from
//   const result = await dynamodb.scan({ TableName: "TaskTable" }).promise();

//   const tasks = result.Items;

//   return {
//     status: 200,
//     body: {
//       tasks,
//     },
//   };
// };

// module.exports = {
//   getTasks,
// };