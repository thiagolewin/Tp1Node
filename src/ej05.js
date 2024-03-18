const parsearUrl = (dato) => {
    let miUrl = new URL(dato)
    let host = miUrl.host
    let pathname = miUrl.pathname
    let searchParams = miUrl.searchParams
    return {
        host,
        pathname,
        "paramtetros": searchParams
    }
}
let objeto = parsearUrl("https://campus.ort.edu.ar/secundaria/almaadsadsadgro/informatica/articulo/2066232/03-01-node-js-instalando-node/?da")
console.log(objeto)