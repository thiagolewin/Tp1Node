import Alumno from './models/alumno.js'

let alumno1 = new Alumno("Matias Esteves", "222829", 20)
let alumno2 = new Alumno("Thiago Lewin", "23231", 18)
let alumno3 = new Alumno("Mateo Cottet", "12131", 14)

console.clear()
console.log(alumno1)
console.log(alumno2)
console.log(alumno3.toString())