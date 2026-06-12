interface ICola<T> {

    encolar(elemento: T): void;

    desencolar(): T | undefined;

    frente(): T | undefined;

    tamaño(): number;

    estaVacia(): boolean;

}

class ColaArreglo<T> implements ICola<T> {

    private elementos: T[] = [];

    encolar(elemento: T): void {
        this.elementos.push(elemento);
    }

    desencolar(): T | undefined {
        return this.elementos.shift();
    }

    frente(): T | undefined {
        return this.elementos[0];
    }

    tamaño(): number {
        return this.elementos.length;
    }

    estaVacia(): boolean {
        return this.elementos.length === 0;
    }

}

const fila = new ColaArreglo<string>();

fila.encolar("Juan");
fila.encolar("Maria");
fila.encolar("Pedro");
fila.encolar("Ana");
fila.encolar("Carlos");

console.log("Cliente al frente:", fila.frente());

console.log("Atendido:", fila.desencolar());
console.log("Atendido:", fila.desencolar());
console.log("Atendido:", fila.desencolar());

console.log("Clientes restantes:", fila.tamaño());

export{};