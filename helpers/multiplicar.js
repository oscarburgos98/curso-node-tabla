const colors = require('colors')
const fs = require('fs');


const crearArchivoTabla = async (base = 5, condition = false, hasta = 10) => {
    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta ; i++) {
            
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
        }
        
        if( condition == true){
            console.log('================'.green)
            console.log('Tabla del:'.green, colors.blue(base))
            console.log('================'.green)
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt creado!`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivoTabla
}