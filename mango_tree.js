"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._maxBuah = 15
    this._kumpulanBuah = []
    this._harvested = null
    this._healthyStatus = true
    this._buahGood = 0
    this._buahBad = 0
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this._kumpulanBuah
  }
  getHealtyStatus() {
    if (this._healthyStatus) {
      return 'sehat'
    }
    else {
      return 'tidak sehat'
    }
  }


  // Get current states here

  // Grow the tree
  grow() {
    if (this.getAge() < 20) {
      this._age ++
      this._height += Math.random()
    }
    else {
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.getHealtyStatus() == 'sehat') {
      let random = Math.ceil(Math.random()*this._maxBuah)
      for (let i=0; i<random; i++) {
        this._kumpulanBuah.push(new Mango())
      }
    }

  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i=0; i<this._kumpulanBuah.length; i++) {
      if (this._kumpulanBuah[i]._kwalitasMango == 'good') {
        good ++
      }
      else {
        bad ++
      }
    }

    this._harvested = `${this._kumpulanBuah.length} (${good} good, ${bad} bad)`
    this._kumpulanBuah = []
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._kwalitasMango = this.kwalitas()
  }

  kwalitas() {
    let random = Math.floor(Math.random() * 2)
    if (random == 1) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}


// driver code untuk release 0
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   // console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
//   if (mangoTree.getHealtyStatus() == 'sehat') {console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)}
// } while (mangoTree._healthyStatus != false)






// Release 1
class AppleTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._maxBuah = 20
    this._kumpulanBuah = []
    this._harvested = null
    this._healthyStatus = true
    this._buahGood = 0
    this._buahBad = 0
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this._kumpulanBuah
  }
  getHealtyStatus() {
    if (this._healthyStatus) {
      return 'sehat'
    }
    else {
      return 'tidak sehat'
    }
  }


  // Get current states here

  // Grow the tree
  grow() {
    if (this.getAge() < 7) {
      this._age ++
      this._height += Math.random()
    }
    else {
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceApples() {
    if (this.getHealtyStatus() == 'sehat') {
      let random = Math.ceil(Math.random()*this._maxBuah)
      for (let i=0; i<random; i++) {
        this._kumpulanBuah.push(new Apple())
      }
    }

  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i=0; i<this._kumpulanBuah.length; i++) {
      if (this._kumpulanBuah[i]._kwalitasApple == 'good') {
        good ++
      }
      else {
        bad ++
      }
    }

    this._harvested = `${this._kumpulanBuah.length} (${good} good, ${bad} bad)`
    this._kumpulanBuah = []
  }

}

class Apple {
  constructor() {
    this._kwalitasApple = this.kwalitas()
  }

  kwalitas() {
    let random = Math.floor(Math.random() * 2)
    if (random == 1) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}

// driver code untuk release 1
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  // console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
  if (appleTree.getHealtyStatus() == 'sehat') {console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested}`)}
} while (appleTree._healthyStatus != false)






// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
