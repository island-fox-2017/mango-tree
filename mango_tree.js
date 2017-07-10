"use strict"

class FruitTree {
  constructor(parameter) {
    this._age = 0;
    if (parameter.hasOwnProperty("age")) {
      this._age = parameter["age"];
    }
    
    this._height = 0;
    if (parameter.hasOwnProperty("height")) {
      this._height = parameter["height"];
    }
    
    this._fruits = [];
    if (parameter.hasOwnProperty("fruits")) {
      let num_fruits = parameter["fruits"];
      this.produceFruitsArgs(num_fruits);
    }
    
    this._harvested = 0;
    
    this._healthy = true;
    if (parameter.hasOwnProperty("healthy")) {
      this._healthy = parameter["healthy"];
    }
    
    //console.log("=============", parameter.maxAge);
    this._maxAge = 20;
    if (parameter.hasOwnProperty("maxAge")) {
      this._maxAge = parameter["maxAge"];
    }
    
    this._maxFruits = 50;
    if (parameter.hasOwnProperty("maxFruits")) {
      this._maxFruits = parameter["maxFruits"];
    }
    
    this._fruitName = "Unknown"
    if (parameter.hasOwnProperty("fruitName")) {
      this._fruitName = parameter["fruitName"];
    }
    
    this._good = 0;
    this._bad = 0;
  }
  
  getAge() {
    return this._age;
  }
  
  getHeight() {
    return this._height;
  }
  
  getFruits() {
    return this._fruits;
  }
  
  getHealthyStatus() {
    return this._healthy;
  }

  grow() {
    
    
    if (this._age < this._maxAge) {
      this._age++;      
      this._height += Math.round(random() / 12);
      return this._healthy = true;
    } else if (this._age == this._maxAge) {
      console.log(`${this._fruitName} has already maximum age`);
      return this._healthy = false;            
    } else {
      return this._healthy = false;
    }
    
  }
    
  // Produce some fruits
  produceFruits(start) {
    let count = random() + 30;
    let totalCount = (count > this._maxFruits) ? this._maxFruits : count;
  
  if (this._age >= start) {    
  for (let i = 0; i < totalCount; i++) {
    let fruit = new Fruit();
      
    if (fruit.quality == "good") {
      this._good++;
    } else {
      this._bad++;
    }
      
    this._fruits.push(fruit);
    }
  }
}
    
  produceFruitsArgs(totalCount) {
    for (let i = 0; i < totalCount; i++) {
      let fruit = new Fruit();
      
      if (fruit.quality == "good") {
        this._good++;
      } else {
        this._bad++;
      }
      
      this._fruits.push(fruit);
    }
  }
  
  // Get some fruits
  harvest() {
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
    this._fruits = [];
    this._bad = 0;
    this._good = 0;
  }
  
}

class Fruit {
  constructor() {
    this.quality = (random() % 2 == 0) ? "good" : "bad";
  }
}

function random() {
  return Math.floor(Math.random() * 20);
}

// Manggo
class MangoTree extends FruitTree {
  constructor(parameter) {
    super(parameter);
    //console.log("++++++++++++++++++=",parameter);
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

let mangoTree = new MangoTree({fruitName: "Mango"});
console.log(`The ${mangoTree._fruitName} tree is alive! : smile:`);  

do {
  mangoTree.grow();
  mangoTree.produceFruits(3);
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | ${mangoTree._fruitName}s harvested = ${mangoTree._harvested}`);
} while (mangoTree.getHealthyStatus() != false)
  
console.log(`The ${mangoTree._fruitName} tree has met its end. :sad:\n`);


// Apple
class AppleTree extends FruitTree {
  constructor(parameter) {
    super(parameter);
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

let appleTree = new AppleTree({fruitName: "Apple"});
console.log(`The ${appleTree._fruitName} tree is alive! : smile:`);  

do {
  appleTree.grow();
  appleTree.produceFruits(3);
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | ${appleTree._fruitName}s harvested = ${appleTree._harvested}`);
} while (appleTree.getHealthyStatus() != false)
  
console.log(`The ${appleTree._fruitName} tree has met its end. :sad:\n`);


// Pear
class PearTree extends FruitTree {
  constructor(parameter) {
    super(parameter);
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

let pearTree = new PearTree({fruitName: "Pear"});
console.log(`The ${pearTree._fruitName} tree is alive! : smile:`);  

do {
  pearTree.grow();
  pearTree.produceFruits(3);
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | ${pearTree._fruitName}s harvested = ${pearTree._harvested}`);
} while (pearTree.getHealthyStatus() != false)
  
console.log(`The ${pearTree._fruitName} tree has met its end. :sad:\n`);

//Grove
class treeGrove {
  constructor() {
    this.trees = [];
  }
  
  inputTree(fruitName, age, height, fruits, healthy, maxAge) {
    if (fruitName == "MangoTree") {
      let mangoTree = new MangoTree ({fruitName: fruitName, age: age, height: height, fruits: fruits, healthy: healthy, maxAge: maxAge});
      this.trees.push(mangoTree);
    }
    if (fruitName == "AppleTree") {
      let appleTree = new AppleTree ({fruitName: fruitName, age: age, height: height, fruits: fruits, healthy: healthy, maxAge: maxAge});
      this.trees.push(appleTree);
    }
    if (fruitName == "PearTree") {
      let pearTree = new PearTree ({fruitName: fruitName, age: age, height: height, fruits: fruits, healthy: healthy, maxAge: maxAge});
      this.trees.push(pearTree);
    }
  }
  
  showAges() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`${this.trees[i]._fruitName}, age: ${this.trees[i]._age} years old`);
    }
  }
  
  showTrees() {
    console.log("\nTree Kind:");
    for (let i = 0; i < this.trees.length; i++) {
      console.log(this.trees[i]._fruitName);
    }
  }
  
  matureTrees() {
    console.log("\nGrowing Tree:");
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i]._fruits.length > 0) {
        console.log(`${this.trees[i]._fruitName}, fruits: ${this.trees[i]._fruits.length}, height: ${this.trees[i]._height} m`);
      }
    }
  }
  
  deadTrees() {
    let deadTree = 0;
    console.log("\nDead Tree:");
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i]._healthy == false) {
        return console.log(`${this.trees[i]._fruitName}`);
        // deadTree++;
      } else {
        return console.log("No dead tree found!");
      }
        
      
    // }
    // if (deadTree <= 0) {
    //   return console.log("No dead tree found!");
    // }
  }
}
  
  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].grow();
    }
    console.log("Next Year:");
  }
}

let grove = new treeGrove();
grove.inputTree("MangoTree", 3, 1.7, 7, true, 5);
grove.inputTree("MangoTree", 5, 2.5, 11, true, 20);
grove.inputTree("AppleTree", 3, 1.3, 5, true, 4);
grove.inputTree("PearTree", 15, 3, 15, true, 20);

//  for (let i = 0; i < 15; i++) {
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
//  }

grove.showAges();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();