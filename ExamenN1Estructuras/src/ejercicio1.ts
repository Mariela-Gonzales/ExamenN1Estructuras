enum CategoriProducto {
    Herramienta,
    Material,
    Electrico,
    Plomeria
}

let codigoProducto: number = 1001;
let nombreProducto: string = "taladro";
let enStock: boolean = true;
let precioUnitario: number = 45.50;
let categoria: CategoriProducto = CategoriProducto.Herramienta;

type RegistroProducto = [number, string, CategoriProducto, number, boolean];

let producto1: RegistroProducto = [
    1001,
    "taladro",
    CategoriProducto.Herramienta,
    45.50,
    true
];

const nombre = producto1[1];
const precio = producto1[3];

console.log("Nombre:", nombre);
console.log("Precio:", precio);

export{};