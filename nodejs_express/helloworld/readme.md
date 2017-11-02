# Create application with Express
    
##### Nodejs app initialisation in specific folder
    command: npm init -y 
    
##### Installation of express package
    command: npm install express --save  

#### Hello world example
Create new file app.js
        
    const express = require('express');
    const app = new express();
          
          app.get('/', (req, res) => {
              res.send('Hello World')
          });   
          
          app.listen(3030, () => {
              console.log('Server is up')
          })
##### Start server with node

    command: node app.js 

##### Start server with nodemon 
Installation nodemon:

    command: npm install nodemon

Start server

    command: nodemon app.js 
   
#### Test
    You can test with any browser or tools such as Postman on utl http://localhost:3030