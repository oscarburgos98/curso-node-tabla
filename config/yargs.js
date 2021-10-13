//crea un objeto con todo lo que puedes pasar en la linea de comando
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Toma la base para multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Define el numero hasta cual se va a multiplicar la base'
        })
        .check((argv, options) => {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un numero'
            }
            if(!argv.l == null){
                argv.l = true
            }
            return true;
        })
        .argv;

module.exports = {
    argv
};