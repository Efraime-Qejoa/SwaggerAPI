const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

const port = process.env.PORT || 5000;

// Config
// Find Infrmation on https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Customer API',
            description: "Customer API Information",
            contact: {
                name: "DevData Analyst"
            },
        servers: ["https://localhost:5000"]
        }
    },
    // Tell doc generator where to look for api
    apis:["app.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 *  /customers:
 *   get:
 *      description: Use to request all customers
 *      responses:
 *        '200':
 *          description: A succesful response
 */
app.get('customers',(req,res) =>{
    res.send('Customer results');
})

app.listen(port, () => {
    console.log('Server listening on port ${port}');
});
