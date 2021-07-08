const fs = require('fs');
const colors = require('colors');
/*const crearArchivo = (base = 5) => {
    return new Promise( (resolve, reject) => {
        console.log('===========================')
        console.log('Tabla del ' + base);
        console.log('===========================')

        let salida = '';

        for(let c = 0; c <= 10; c++){
            salida += `${base} x ${c} = ${base*c}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        reject(`tabla-${ base }.txt`);
    })
}*/

const crearArchivo = async(base = 5, l, h) => {
    try{
        console.log('==========================='.cyan)
        console.log(colors.green('Tabla del ' + base));
        console.log('==========================='.cyan)

        let salida = '';

        if(l)
        {
            for(let c = 0; c <= h; c++){
                salida += `${base} x ${c} = ${base*c}\n`;
            }
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${ base }.txt`);
    }catch(err){
        throw err;
    }
}
module.exports = {
    crearArchivo
}
