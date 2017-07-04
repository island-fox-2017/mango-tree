"use strict"

// R 0 + R 2
class FruitTree {
  constructor() {
    this.age = 0;
    this.mAge = 20;
    this.height = 1;
    this.mHeight = 100;
    this.fruits = [];
    this.numFruit = 0;
    this.healthyStatus = true;
  }
  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.fruits;
  }
  getHealtyStatus() {
    return this.healthyStatus;
  }
  grow(ageStartHeight) {
    this.age += 1;
    let growthFactor = Math.floor(Math.random() * (this.mHeight / 10));
    if (this.age < ageStartHeight) {
      this.height += growthFactor;
    }
    if (this.age >= ageStartHeight) {
      this.height = this.height;
    }
    if (this.age >= this.mAge) {
      this.healthyStatus = false;
    }
  }

  produce(ageStartProduce) {
    let numFruit = Math.ceil(Math.random() * 10);
    if (this.age >= ageStartProduce) {
      for (let i = 0; i < numFruit; i++) {
        this.fruits[i] = new Fruit();
      }
    }
    return numFruit;
  }

  harvest() {
    let countGood = 0;
    let countBad = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality == true) {
        countGood++;
      } else countBad++;
    }
    this.result = `${this.fruits.length} `
    this.print = `(${countGood} good, ${countBad} bad) |`
    this.fruits = [];
  }
}

class Fruit {
  constructor() {
    this.quality = this.qualityFactor();
  }
  qualityFactor() {
    let random = Math.ceil(Math.random()*2);
    if (random == 1) {
      return true }
      else {false}
  }
}

// R 1
class MangoTree extends FruitTree {
  constructor(name) {
    super();
    this.name = name
    this.mHeight = 50;
    this.mAge = 20;
  }
}
class Mango extends Fruit {
  constructor() {
    super ()
  }
}

class AppleTree extends FruitTree {
  constructor(name) {
    super();
    this.name = name
    this.mHeight = 40;
    this.mAge = 10;
  }
}
class Apple extends Fruit {
  constructor() {}
}

class PearTree extends FruitTree {
  constructor(name) {
    super();
    this.name = name
    this.mHeight = 35;
    this.mAge = 15;
  }
}
class Pear extends Fruit {
  constructor() {}
}

let mangoTree = new MangoTree('mango')
console.log(`The ${mangoTree.name} tree is alive! :smile:`);
do {
  mangoTree.grow(17);
  mangoTree.produce(4);
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m  | ${mangoTree.name} harvested = ${mangoTree.result} ${mangoTree.print}`)
} while (mangoTree.healthyStatus != false)
console.log('The tree has met its end. :sad: ');
console.log('\n');

let appleTree = new AppleTree('apple')
console.log(`The ${appleTree.name} tree is alive! :smile:`);
do {
  appleTree.grow(9);
  appleTree.produce(2);
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m  | ${appleTree.name} harvested = ${appleTree.result} ${appleTree.print}`)
} while (appleTree.healthyStatus != false)
console.log('The tree has met its end. :sad: ');
console.log('\n');

let pearTree = new PearTree('pear')
console.log(`The ${pearTree.name} tree is alive! :smile:`);
do {
  pearTree.grow(14);
  pearTree.produce(4);
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m  | ${pearTree.name} harvested = ${pearTree.result} ${pearTree.print}`)
} while (pearTree.healthyStatus != false)
console.log('The tree has met its end. :sad: ');
console.log('\n');

// R 3
class TreeGrove {
  constructor() {
    this.trees = [];
  }

  input(Tree, age, height, fruit, health) {
    let tree = new Tree();
    tree.age = age;
    tree.height = height;
    tree.numFruit = fruit;
    tree.healthyStatus = health;
    tree.name = Tree.name;
    tree.fruits = [];
    this.trees.push(tree)
  }

  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].grow();
    }
  }

  showTrees() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(this.trees[i].name);
    }
  }

  showAge() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`${this.trees[i].name}, age : ${this.trees[i].age} years old`)
    }
  }

  dead_trees() {
    let deadTrees = '';
    console.log('Dead Trees: ');
    for (let i = 0; i < this.trees.length; i++) {
      if (!this.trees[i].healthyStatus) {
        deadTrees += `${this.trees[i].name} \n`;
      }
    }
    console.log(deadTrees);
    return deadTrees;
  }

  mature_trees() {
    let mature = '';
    console.log('Trees that Have Already Mature: ');
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i].numFruit > 0 && this.trees[i].healthyStatus) {
        mature += `${this.trees[i].name} \n`;
      }
    }
    console.log(mature);
    return mature;
  }
}

let grove = new TreeGrove();
grove.input(MangoTree, 3, 2, 17, true)
grove.input(AppleTree, 4, 4, 25, true)
grove.input(PearTree, 7, 7, 36, false)
grove.nextYear();
grove.showAge();
console.log('\n');
grove.mature_trees();
grove.dead_trees();
