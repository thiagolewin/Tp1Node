import fs from "fs"

const copiar = (Archivo_Entrada,Archivo_Salida) => 
{
    fs.readFile(Archivo_Entrada,'utf8',(err,datos)=> {
        if(err) {
            console.log(err)
            return;
        }
        fs.writeFile(Archivo_Salida,datos,'utf-8',(err)=> {
            if(err) {
                console.log(err)
                return;
            }
            console.log("Datos copiados")
        })
    })
}

const Archivo_Entrada =  "./src/archivo-entrada.txt"
const Archivo_Salida =  "./src/archivo-salida.txt"
console.clear()
copiar(Archivo_Entrada,Archivo_Salida)