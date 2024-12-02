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
// METHODS TO DISPLAY INFO via HTML
DisplayInfo_Html() {
    const personInfo = document.getElementById('PersonInfo');
    personInfo.innerHTML = `
      <strong>Name:</strong> ${this.name}<br>
      <strong>Age:</strong> ${this.age}<br>
      <strong>Status:</strong> ${this.status}
    `;
  }
}