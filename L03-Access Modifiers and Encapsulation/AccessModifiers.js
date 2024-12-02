class song {
    /*
    
    Private Fields: Use to encapsulate data and doesn't allow to access the class properties outside the class itself
    
    */
    
    #genre;
    #artist;
    #mood;
    
    constructor(genre, artist, mood){
    }
    
    /*
    
    Getters: It's a method use to access the value properties in a controlled way.
    Return: It's use to return the specify value of a function.
    */
    
    get genre (){
      return this.#genre;
    }
    
    get artist  (){
      return this.#artist;
    }
    
    get mood (){
      return this.#mood;
    }
  
    // Method to Display song Info in the console 
    DisplaysongInfo(){
    }
  
    // Method to Display song Info in HTML
    DisplaysongInfo_Html(){
    }
  }
  // Creating instances of the song class
  const songInfo1 = new song('love song', 'adele', 'sad');
  const songInfo2 = new song('rock song ', 'Imagine dragons', 'happy');
  
  // Call methods to display info
songInfo1.DisplaysongInfo();  
  songInfo1.DisplasongInfo();