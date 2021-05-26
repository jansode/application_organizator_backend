const app = require('./app')

PORT = process.env.PORT 
HOST = '0.0.0.0'
app.listen(PORT, HOST, () => {
    console.log('Server running');
});

