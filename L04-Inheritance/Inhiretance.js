class Person {
    #name;
    #age;
    #status;
  
    constructor(name, age, status) {
      this.#name = name;
      this.#age = age;
      this.#status = status;
    }
    
    // GETTERS
    get name() {
        return this.#name;
      }
    
      get age() {
        return this.#age;
      }
    
      get status() {
        return this.#status;
      }
      // METHODS TO DISPLAY INFO
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Status: " + this.status);
      }
}