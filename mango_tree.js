"use strict"

class FruitTree {
  constructor() {
    this._age = 0;
    this._fruits = [];
    this._harvested = '';
    this._health = true;
    this._height = 0;
    this._maxAge = 1;
    this._maxGrowAge = 1;
    this._startProduce = 1;
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

  get harvested() {
    return this._harvested;
  }

  get healthyStatus() {
    if (this._age >= this._maxAge) return false;
    else return true;
  }

  grow() {
    let growthRate = (Math.ceil(Math.random() * 20) + 10) / 100; // random 0.1 - 0.3
    this._age++;

    if (this._age <= this._maxGrowAge) {
      if (this._height === 0) {
        this._height += 1 + growthRate;
        this._height = this._height.toFixed(2);
      } else {
        this._height *= (1 + growthRate);
        this._height = this._height.toFixed(2);
      }
    }
  }  // ----- grow

  produceFruits() {
    let produced = Math.round(Math.random() * 40) + 10; // 10 - 50
    if (this._age >= this._startProduce) {
      for (var i = 0; i <= produced ; i++) {
        this._fruits[i] = new Mango();
      }
    }
  }

  harvest() {
    let good = 0;
    let bad = 0;

    for (var i = 0; i <= this._fruits.length - 1; i++) {
      let qual = this._fruits[i]._quality;
      if (qual === 'good') good++;
      else bad++;
    }
    this._harvested = `${good + bad} (${good} good & ${bad} bad)`;
    this._fruits = [];
  }

}  // --------------- class FruitTree ---------------

class Fruit {
  constructor() {
    this._quality = this.quality()
  }

  quality() {
    let qual = () => {
      let rand = Math.round(Math.random());
      return (rand === 1) ? 'good' : 'bad';
    }
    return this._quality = qual();
  }
}  // --------------- class Fruit ---------------


// Release 2

class MangoTree extends FruitTree {
  constructor() {
    super();
    this._maxAge = 15;
    this._maxGrowAge = 10;
    this._startProduce = 2;
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super();
    this._maxAge = 20;
    this._maxGrowAge = 8;
    this._startProduce = 5;
  }
}

class PearTree extends FruitTree {
  constructor() {
    super();
    this._maxAge = 17;
    this._maxGrowAge = 8;
    this._startProduce = 3;
  }
}

class Mango extends Fruit{}
class Apple extends Fruit{}
class Pear extends Fruit{}

let mangoTree = new MangoTree();
let appleTree = new AppleTree();
let pearTree = new PearTree();

// console.log('\nThe mango tree is alive! :smile:');
// do {
//   mangoTree.grow();
//   mangoTree.produceFruits();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus != false);
// console.log('The mango tree has met its end. :sad:\n');
//
// console.log('\nThe apple tree is alive! :smile:');
// do {
//   appleTree.grow();
//   appleTree.produceFruits();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthyStatus != false);
// console.log('The apple tree has met its end. :sad:\n');
//
// console.log('\nThe pear tree is alive! :smile:');
// do {
//   pearTree.grow();
//   pearTree.produceFruits();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthyStatus != false);
// console.log('The pear tree has met its end. :sad:\n');

//  --------------- end of Release 2 ---------------


// Release 3
class TreeGrove {
  constructor() {
    this.year = 0;
    this.trees = [];
  }

  inputTree(type, age, height, fruit, health) {
    let tree = new type();
    tree._age = age;
    tree._fruits = [];
    tree._height = height;
    tree._health = health;
    tree.name = type.name;
    tree.totalFruit = fruit;
    this.trees.push(tree)
  }

  nextYear() {
    this.year++;
    for(var i = 0; i <= this.trees.length - 1; i++) {
      this.trees[i].grow();
    }
  }

  showTrees() {
    for(var i = 0; i <= this.trees.length - 1; i++) {
      console.log(this.trees[i].name);
    }
  }

  showAge() {
    for(var i = 0; i <= this.trees.length - 1; i++) {
      console.log(`${this.trees[i].name}, age: ${this.trees[i]._age}`)
    }
  }

  dead_trees() {
    let dead = [];
    for(var i = 0; i <= this.trees.length - 1; i++) {
      if(!this.trees[i].healthyStatus) {
        dead.push(this.trees[i].name);
      }
    }
    return dead;
  }

  mature_trees() {
    let mature = [];
    for(var i = 0; i <= this.trees.length - 1; i++) {
      if(this.trees[i].totalFruit > 0 && this.trees[i].healthyStatus) {
        mature.push(this.trees[i].name);
      }
    }
    return mature;
  }
} // ----- end of class TreeGrove -----

let grove = new TreeGrove();

// inputTree(type, age, height, fruit, health)
grove.inputTree(MangoTree, 3, 1.8, 7, true)
grove.inputTree(MangoTree, 5, 2.4, 12, true)
grove.inputTree(AppleTree, 4, 1.2, 5, true)
grove.inputTree(AppleTree, 18, 2, 15, true)
grove.inputTree(PearTree, 13, 2, 15, true)

// console.log(grove.trees);

// next year
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();

console.log('-------- show trees ages --------: ');
grove.showAge();
console.log('-------- show trees --------:');
grove.showTrees();
console.log('-------- mature trees --------:');
console.log(grove.mature_trees());
console.log('-------- dead trees --------');
console.log(grove.dead_trees());