// Define the base class Animal
class Animal {
    // Private fields for name, age, image, comments, and sound
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    // Constructor to initialize the private fields
    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre;       // Set name
        this.#edad = edad;           // Set age
        this.#img = img;             // Set image
        this.#comentarios = comentarios;   // Set comments
        this.#sonido = sonido;       // Set sound
    }

    // Getter method for name
    get nombre(){
        return this.#nombre;
    }

    // Getter method for age
    get edad(){
        return this.#edad;
    }

    // Getter method for image
    get img(){
        return this.#img;
    }

    // Getter method for comments
    get comentarios(){
        return this.#comentarios;
    }

    // Setter method for comments
    set comentarios(comentario){
        this.#comentarios = comentario;
    }

    // Getter method for sound
    get sonido(){
        return this.#sonido;
    }
}

// Define subclass Leon extending Animal
class Leon extends Animal {
    // Constructor calling superclass constructor
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // Method specific to Leon
    rugir(){
        // Implement roar functionality
    }
}

// Define subclass Lobo extending Animal
class Lobo extends Animal {
    // Constructor calling superclass constructor
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // Method specific to Lobo
    aullar(){
        // Implement howling functionality
    }
}

// Define subclass Oso extending Animal
class Oso extends Animal {
    // Constructor calling superclass constructor
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // Method specific to Oso
    gruñir(){
        // Implement growling functionality
    }
}

// Define subclass Serpiente extending Animal
class Serpiente extends Animal {
    // Constructor calling superclass constructor
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // Method specific to Serpiente
    sisear(){
        // Implement hissing functionality
    }
}

// Define subclass Aguila extending Animal
class Aguila extends Animal {
    // Constructor calling superclass constructor
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    // Method specific to Aguila
    chillar(){
        // Implement screeching functionality
    }
}

// Export subclasses for use in other modules
export {Leon, Lobo, Oso, Serpiente, Aguila};
