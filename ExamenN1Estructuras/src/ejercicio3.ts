interface IPila<T> {

    apilar(elemento: T): void;
    desapilar(): T | undefined;
    tope(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;

}

class PilaArreglo<T> implements IPila<T> {
    private elementos: T[] = [];
    apilar(elemento: T): void {this.elementos.push(elemento);}
    desapilar(): T | undefined {return this.elementos.pop();}
    tope(): T | undefined {return this.elementos[this.elementos.length - 1];}
    tamaño(): number {return this.elementos.length;}
    estaVacia(): boolean {return this.elementos.length === 0;}
}

const historial = new PilaArreglo<string>();

historial.apilar("google.com");
historial.apilar("unah.edu.hn");
historial.apilar("campus.unah.edu.hn");
historial.apilar("correo.unah.edu.hn");

console.log("Página actual:", historial.tope());

console.log("Atrás:", historial.desapilar());
console.log("Atrás:", historial.desapilar());

console.log("Páginas restantes:", historial.tamaño());

export{};