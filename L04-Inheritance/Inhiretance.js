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
}