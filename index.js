class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  }
  
  let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
  let bigFluffyDog2 = new Dog("Woody", "labrador");
  
  bigFluffyDog1; // => Dog { name: 'Buzz', breed: 'greatPyrenees' }
  bigFluffyDog2; // => Dog { name: 'Woody', breed: 'labrador' }
  
  class Breakfast {
    constructor(food, drink) { // Added 'drink' parameter
      this.food = food;
      this.drink = drink; // Assigned 'drink' parameter to instance property
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) { // Added 'soup' and 'drink' parameters
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    constructor(salad, soup, entree, dessert) { // Added 'entree' and 'dessert' parameters
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.dessert = dessert; // Assigned 'dessert' parameter to instance property
    }
  }
  
  let breakfastInstance = new Breakfast('toast', 'juice'); // Corrected parameter values
  let lunchInstance = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea'); // Corrected parameter values
  let dinnerInstance = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake'); // Corrected parameter values
  
  breakfastInstance; // => Breakfast { food: 'toast', drink: 'juice' }
  lunchInstance;     // => Lunch { salad: 'side salad', soup: 'broccoli cheddar soup', drink: 'iced tea' }
  dinnerInstance;    // => Dinner { salad: 'balsamic salad', soup: 'consomme', entree: 'filet mignon', dessert: 'cheesecake' }
  