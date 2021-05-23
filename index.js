const app = require('./app')

require('dotenv').config()

PORT = process.env.PORT 
HOST = 'localhost'
app.listen(PORT, HOST, () => {
    console.log('Server running');
});

