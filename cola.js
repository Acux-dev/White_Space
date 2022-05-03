class Nodo {
    constructor(dato, siguiente) {
        this.dato = dato;
        this.siguiente = siguiente;
    };
};

 
class Cola {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.contador = 0;
    };

    apilar(valor) {
        const node = new Nodo(valor); 
        if (this.cabeza) { 
            this.cola.siguiente = node; 
            this.cola = node; 
        } else { 
            this.cabeza = node;  
            this.cola = node 
        }
        this.length++;
    };

    desapilar() {
        const current = this.cabeza; 
        this.cabeza = this.cabeza.siguiente; 
        this.length--; 
     
        return current.value; 
    };
};