const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar=false, hasta=10) => {



    try {
        if (listar) {
            console.log('listar', listar)
            console.log(colors.red('==============='))
            console.log(`Tabla del ${base}`.green)
            console.log('==============='.grey)
        }
    
        let salida = '';
        let consola = '';
    
        for (let i=1; i <= hasta; i++){    
            salida +=`${base} x ${i} = ${base * i}\n`;
            consola +=`${colors.yellow(base)} x ${colors.blue(i)} = ${colors.red(base * i)}\n`;
        }
        
        if(listar){
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;    
       
    } catch (err) {
        throw err; 
    }


}

module.exports = {
    crearArchivo
}