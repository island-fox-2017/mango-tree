"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    if (this._age < 15) {
      if (this._age < 10) this._height = this._height + parseFloat((Math.random()*5).toFixed(2));
      this._age = this._age + 1;
    }
    if (this._age >= 15) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let randomize = Math.floor(Math.random()*10+1);
    for (let i = 0; i < randomize; i++) {
      this._fruits.push(new Mango);
    }
  }

  // Get some fruits
  harvest() {
    let good = 0, bad = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i]._quality === 'good') good++;
      else bad++;
    }
    let harvested = this._fruits.length;
    this._fruits = [];
    return `${harvested} (${good} good, ${bad} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = this.qualityCheck();
  }

  qualityCheck() {
    let randomize = Math.floor(Math.random()*2);
    if (randomize === 0) return "good";
    else return "bad";
  }
}

let mangoTree = new MangoTree()

do {
 mangoTree.grow();
 mangoTree.produceMangoes();
 console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m| Fruits harvested = ${mangoTree.harvest()}`)
} while (mangoTree._healthyStatus != false)

console.log(`The tree has met its end. :sad:`);
console.log();console.log();
//-------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------//

// Release 1
class AppleTree {
    // Initialize a new Apple
    constructor() {
      this._age = 0;
      this._height = 0;
      this._fruits = [];
      this._healthyStatus = true;
    }

    get age() {
      return this._age;
    }

    get height() {
      return this._height;
    }

    get fruits() {
      return this._fruits;
    }

    get healthyStatus() {
      return this._healthyStatus;
    }


    // Get current states here

    // Grow the tree
    grow() {
      if (this._age < 15) {
        if (this._age < 10) this._height = this._height + parseFloat((Math.random()*3).toFixed(2));
        this._age = this._age + 1;
      }
      if (this._age >= 15) {
        this._healthyStatus = false;
      }
    }

    // Produce some Apples
    produceApple() {
      let randomize = Math.floor(Math.random()*10+1);
      for (let i = 0; i < randomize; i++) {
        this._fruits.push(new Apple);
      }
    }

    // Get some fruits
    harvest() {
      let good = 0, bad = 0;
      for (let i = 0; i < this._fruits.length; i++) {
        if(this._fruits[i]._quality === 'good') good++;
        else bad++;
      }
      let harvested = this._fruits.length;
      this._fruits = [];
      return `${harvested} (${good} good, ${bad} bad)`;
    }
}

class Apple {
  // Produce an apple
  constructor() {
    this._quality = this.qualityCheck();
  }

  qualityCheck() {
    let randomize = Math.floor(Math.random()*2);
    if (randomize === 0) return "good";
    else return "bad";
  }
}

let appleTree = new AppleTree()

do {
 appleTree.grow();
 appleTree.produceApple();
 console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree.harvest()}`)
} while (appleTree._healthyStatus != false)

console.log(`The tree has met its end. :sad:`);

//-------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------//

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
