class Nodo<T> {

    public valor: T;
    public siguiente: Nodo<T> | null;

    constructor(valor: T) {
        this.valor = valor;
        this.siguiente = null;
    }
}

interface ILista<T> {
    insertarAlFinal(valor: T): void;
    eliminarPrimero(): T | null;
    buscar(valor: T): boolean;
    tamaño(): number;
    imprimir(): void;
}

class ListaEnlazada<T> implements ILista<T> {

    private cabeza: Nodo<T> | null = null;

    insertarAlFinal(valor: T): void {

        const nuevo = new Nodo<T>(valor);

        if (this.cabeza === null) {
            this.cabeza = nuevo;
            return;
        }

        let actual = this.cabeza;

        while (actual.siguiente !== null) {
            actual = actual.siguiente;
        }

        actual.siguiente = nuevo;
    }

    eliminarPrimero(): T | null {

        if (this.cabeza === null) {
            return null;
        }

        const valor = this.cabeza.valor;

        this.cabeza = this.cabeza.siguiente;

        return valor;
    }

    buscar(valor: T): boolean {

        let actual = this.cabeza;

        while (actual !== null) {

            if (actual.valor === valor) {
                return true;
            }

            actual = actual.siguiente;
        }

        return false;
    }

    tamaño(): number {

        let contador = 0;

        let actual = this.cabeza;

        while (actual !== null) {
            contador++;
            actual = actual.siguiente;
        }

        return contador;
    }

    imprimir(): void {

        let actual = this.cabeza;

        while (actual !== null) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }

}

const clientes = new ListaEnlazada<string>();

clientes.insertarAlFinal("Juan");
clientes.insertarAlFinal("Maria");
clientes.insertarAlFinal("Pedro");
clientes.insertarAlFinal("Ana");

console.log("Buscar Pedro:", clientes.buscar("Pedro"));
console.log("Buscar Carlos:", clientes.buscar("Carlos"));

console.log("Eliminado:", clientes.eliminarPrimero());

console.log("Lista resultante:");
clientes.imprimir();

export{};