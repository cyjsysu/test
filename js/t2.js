export default class Pig {
    constructor(name) {
        this.name = name;
    }

    greet() {
        alert('Hi, my name is ' + this.name + '. I am a little pig.');
    }
}