"use strict"
// Release 2
class FruitTree {
  // Initialize a new MangoTree
  constructor() {
    this.age =  0 ;
    this.height = 0;
    this.fruits = []
    this.healthyStatus = true;
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {
    return this.fruits
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  // Get current states here

  // Grow the tree
  grow() {
    this.age ++
    if(this.age < this.maxHeight){
      this.height += 0.5
    }
    if (this.age === this.maxAges ) {
      this.healthyStatus = false
    }

  }
  // Produce some mangoes
  produceFruits() {
    let berbuah = Math.floor(Math.random()*(10)+1) ;
    for (var i = 0; i < berbuah; i++) {
      this.fruits.push(new Mango)
    }
  }
  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;

    for (var i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].kualitas == 'good') {
        good++
      }else {
        bad++
      }
    }
    let hasilBuah = this.fruits.length
    this.fruits =[]
    return `${hasilBuah} (${good} good, ${bad} bad )`
  }
}
class Fruit {
  // Produce a Fruit
  constructor() {
    this.kualitas = this.nilaiKualitas()
  }
  nilaiKualitas(){
    let random  = Math.floor(Math.random() * (2)+0)
    if (random == 1) {
      return 'good'
    }else {
      return 'bad'
    }
  }
}

// release 0
class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super()
    this.maxHeight =10
    this.maxAges =15
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
      super()
  }
}

   let mangoTree = new MangoTree()
  //  mangoTree.grow();
  //  mangoTree.produceMangoes();
  //  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvest()}`)

   do {
     mangoTree.grow();
     mangoTree.produceFruits();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {

  // Initialize a new MangoTree
  constructor() {
    super()
    this.maxHeight == 5
    this.maxAges =15
  }

}
class Apple extends Fruit{
  // Produce a mango
  constructor() {
    super
  }

}


// Release 3
class TreeGrove {}
