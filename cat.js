export class Cat {
    constructor(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }

    miau() {
        console.log(this.name + " says Miauuu");
    }
}