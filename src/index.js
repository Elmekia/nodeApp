const app = require('./server');

app.listen(app.get('port'),()=> {
    console.log('Esto no saca turnos papi');
})