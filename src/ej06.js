let datos;
try {
    let miUrl = new URL("https://campus.ort.edu.ar/secundaria/almagro/informatica/articulo/2066232/03-01-node-js-instalando-node/?da")
    let host = miUrl.host
    let pathname = miUrl.pathname
    let searchParams = miUrl.searchParams
    datos = {
        host,
        pathname,
        "paramtetros": searchParams
    }
} catch (error) {
    console.log("Error en la url")
    datos = {
        "host" : "",
        "pathname" : "",
        "paramtetros" : ""
    }
}
console.log(datos)