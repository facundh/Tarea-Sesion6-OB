const arr = ['Leche', 'Agua', 'Frutos Secos', 'Aceitunas', 'Queso Fresco', 'Salmon', 'Huevos'];

arr.push('Aceite de Girasol');

console.log(arr);

arr.pop(arr);

console.log(arr);

const arrPeliculas = [
    {titulo: 'El Club de la Pelea', director:'David Fincher', fecha: 1999},
    {titulo: 'El Padrino', director:'Francis Ford Coppola', fecha: 1972},
    {titulo: 'Casino', director:'Martin Scorsese', fecha: 1996}
];

const peliFiltrada = arrPeliculas.filter(valor => valor.fecha > 1990);
console.log(peliFiltrada)

const peliMapDirector = arrPeliculas.map(nombre => nombre.director);
console.log(peliMapDirector);

const peliMapTitulo = arrPeliculas.map(valor => valor.titulo );
console.log(peliMapTitulo); 

const peliConcat = peliMapDirector.concat(peliMapTitulo);
console.log(peliConcat);

const listaPropagada = [...peliMapDirector, ...peliMapTitulo];
console.log(listaPropagada);