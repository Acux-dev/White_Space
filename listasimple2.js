class Nodo2 {
    constructor(dato, siguiente) {
        this.dato = dato;
        this.siguiente = siguiente;
    };
};

class ListaEnlazada2 {
    constructor() {
        this.cabeza = null;
        this.contador = 0;
    };

    agregar(dato) {
        const nuevonodo = new Nodo2(dato, null);
        if (!this.cabeza) {
            this.cabeza = nuevonodo
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente
            };
            actual.siguiente = nuevonodo;
        };
        this.contador++
    };

    eliminar(dato) {
        let actual = this.cabeza
        let anterior = null;

        while (actual != null) {
            if (actual.dato === dato) {
                if (!anterior) {
                    this.cabeza = actual.siguiente;
                } else {
                    anterior.siguiente = actual.siguiente;
                };
                this.contador--;
                return actual.dato;
            };
            anterior = actual;
            actual = actual.siguiente
        };
        return null;
    };

    buscar(valor) {
        if (!this.cabeza) {
            return null;
        };
        let actual = this.cabeza;
        while (actual) {
            if (actual.dato === valor) {
                return actual;
            };
            actual = actual.siguiente;
        };
    };

    invertir(cabeza) {
        let temporal = null;
        let anterior = null;
        let actual = this.cabeza;

        while (actual != null) {
            temporal = actual.siguiente
            actual.siguiente = anterior
            anterior = actual
            actual = temporal
        };
        this.cabeza = anterior
    };

    print() {
        let actual = this.cabeza;
        while (actual) {
            coontraseña.push(actual.dato);
            actual = actual.siguiente;
        };
    };
};

export default ListaEnlazada2