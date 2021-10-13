const { crearArchivoTabla } = require('./helpers/multiplicar')
const { argv } = require('./config/yargs');
const colors = require('colors')

console.clear();

//console.log(argv)

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err))
