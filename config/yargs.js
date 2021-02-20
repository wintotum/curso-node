

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla por pantalla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Es el hasta'
    })
    .check((argv, options) => {
        // console.log('yargs', argv)
        if( isNaN( argv.base )) {
            throw 'La base tiene que ser un número'
        }
        if( typeof argv.listar != "boolean" ) {
            throw 'Listar debe ser boolean'
        }
        if( isNaN( argv.hasta ) || argv.hasta > 20) {
            throw 'Hasta debe ser numérico y menor o igual a 20'
        }


        return true;
    })
    .argv;

    module.exports = argv;