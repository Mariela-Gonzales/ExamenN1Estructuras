interface Venta {
    id: number;
    producto: string;
    monto: number;
    categoria: string;
    pagado: boolean;
}

const ventas: Venta[] = [
    { id:1, producto:"Taladro", monto:450.00, categoria:"Electrico", pagado:true },
    { id:2, producto:"Cable 10m", monto:85.50, categoria:"Electrico", pagado:false },
    { id:3, producto:"Llave inglesa", monto:95.00, categoria:"Herramienta", pagado:true },
    { id:4, producto:"Tubo PVC 1/2", monto:32.00, categoria:"Plomeria", pagado:true },
    { id:5, producto:"Martillo", monto:120.00, categoria:"Herramienta", pagado:false },
    { id:6, producto:"Cemento 50kg", monto:210.00, categoria:"Material", pagado:true },
    { id:7, producto:"Sierra circular", monto:380.00, categoria:"Herramienta", pagado:true },
    { id:8, producto:"Cinta métrica", monto:55.00, categoria:"Herramienta", pagado:false }
];


// ventas pagdas complejidad: O(n)
const ventasPagadas = ventas.filter(venta => venta.pagado === true);
console.log(ventasPagadas);



// ventas usando map complejidad O(n)
const nombresProductos: string[] = ventas.map(venta => venta.producto);
console.log(nombresProductos);


//  ventas usando reduce complejidad O(n)
const totalVentas: number =
    ventas.reduce(
        (acumulador, venta) =>
            acumulador + venta.monto,
        0
    );

console.log(totalVentas);


//  ventas usado filter+reduce complejidad O(n)
const totalHerramientas: number =
    ventas
        .filter(
            venta =>
                venta.categoria ===
                "Herramienta"
        )
        .reduce(
            (acumulador, venta) =>
                acumulador + venta.monto,
            0
        );

console.log(totalHerramientas);


//ventas usando sort complejidad O(n)
ventas.sort(
    (a, b) => b.monto - a.monto
);

ventas.map(
    venta =>
        console.log(
            `${venta.producto}: L.${venta.monto}`
        )
);


export{};