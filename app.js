
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

// console.log(process.argv);
console.log(argv);
// console.log('base argv yargs',argv.b);


// const [,,arg3 = 'base=5'] = process.argv;

// const [, base = 5 ] = arg3.split('=');

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArhivo => console.log(nombreArhivo,'creado'))
    .catch(err => console.log(err));


