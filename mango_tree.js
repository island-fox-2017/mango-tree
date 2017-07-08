"use strict"


// Release 2
class FruitTree {
  constructor() {
    this.age = 0;
    this.height = 0;
    this.status = true;
    this.fruit = [];
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.heigth
  }
  getFruits() {
    return this.fruit.length;
  }
  getHealtyStatus() {
    return this.status
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age += 1
    if (this.age >= 25) {
      this.status = false;
    }
    if (this.age < 17) {
      this.height += Math.floor(Math.random() * 3)
    }

  }

  // Produce some mangoes
  produceFruits() {
    var random = Math.floor(Math.random() * 10 + 1)
    for (var i = 0; i < random; i++) {
      this.fruit.push(new Fruit())
    }
  }

  // Get some fruits
  harvest() {
    var good = 0;
    var bad = 0;
    var steal = 0;
    var tot = 0;
    for (var i = 0; i < this.fruit.length; i++) {
      if (this.fruit[i]._quality == "good") {
        good++
      }
      else if (this.fruit[i]._quality == "bad") {
        bad++
      }
      else {
        steal++
      }
    }
    tot = this.fruit.length;
    this.fruit = []
    return `${tot} ( ${good} good, ${bad} bad, ${steal} Di colong )`
  }

}

class Fruit {
  constructor() {
    this._quality = this.quality();
  }
  quality() {
    let i = Math.floor(Math.random() * 3 + 1)
    if (i == 1) {
      return 'di colong'
    }
    else if (i == 2) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}

// release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super()
    this.age = 0;
    this.height = 0;
    this.status = true;
    this.fruit = [];
  }
  getAge() {
    return this.age
  }
  getHeight() {
    return this.heigth
  }
  getFruits() {
    return this.fruit.length;
  }
  getHealtyStatus() {
    return this.status
  }

  grow() {
    super.grow()
  }
  produceMangoes() {
    super.produceFruits()
  }
  harvestPear() {
    super.harvest()
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super()
    this._quality = this.quality();
  }
  quality() {
    super.quality()
  }
}


/**
 * driver code untuk release 0
 * let mangoTree = new MangoTree()
 * do {
 *   mangoTree.grow();
 *   mangoTree.produceMangoes();
 *   mangoTree.harverst();
 *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
 * } while (mangoTree.healthyStatus != false)
 */

// Release 1
class AppleTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super()
    this.age = 0;
    this.height = 0;
    this.status = true;
    this.fruit = [];
  }
  getAge() {
    return this.age
  }
  getHeight() {
    return this.heigth
  }
  getFruits() {
    return this.fruit.length;
  }
  getHealtyStatus() {
    return this.status
  }

  grow() {
    super.grow()
  }
  produceApple() {
    super.produceFruits()
  }
  harvestPear() {
    super.harvest()
  }
}

class Apple extends Fruit {
  // Produce a mango
  constructor() {
    super()
    this._quality = this.quality();
  }
  quality() {
    super.quality()
  }
}





class PearTree extends FruitTree {
  constructor() {
    super()
    this.age = 0;
    this.height = 0;
    this.status = true;
    this.fruit = [];
  }
  getAge() {
    return this.age
  }
  getHeight() {
    return this.heigth
  }
  getFruits() {
    return this.fruit.length;
  }
  getHealtyStatus() {
    return this.status
  }

  grow() {
    super.grow()
  }
  producePear() {
    super.produceFruits()
  }
  harvestPear() {
    super.harvest()
  }
}

class Pear extends Fruit {
  constructor() {
    super()
    this._quality = this.quality();
  }
  quality() {
    super.quality()
  }
}

let pearTree = new PearTree()
let pear = new Pear()
let mangoTree = new MangoTree()
let mango = new Mango()
let appleTree = new AppleTree()
let apple = new Apple()

// while (mangoTree.status != false) {
//   mangoTree.grow()
//   mangoTree.produceMangoes();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Mango harvested = ${mangoTree.harvest()}`)
// };
// while (appleTree.status != false) {
//   appleTree.grow()
//   appleTree.produceApple();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Apple harvested = ${appleTree.harvest()}`)
// };
// while (pearTree.status != false) {
//   pearTree.grow()
//   pearTree.producePear();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Pear harvested = ${pearTree.harvest()}`)
// };


// Release 3
class TreeGrove {
  constructor() {
    this.treeList = []
  }
  inputTree(namaP, umurP, tinggiP, buahP, statusP) {
    var pohon = {}
    pohon['nama'] = namaP
    pohon['umur'] = umurP
    pohon['tinggi'] = tinggiP
    pohon['buah'] = buahP
    pohon['status'] = statusP
    this.treeList.push(pohon)
    console.log(`${namaP} sudah di tambahkan ke daftar pohon`);
  }
  showAges() {
    for (var i = 0; i < this.treeList.length; i++) {
      console.log(this.treeList[i].umur);
    }
  }
  showTree() {
    console.log(this.treeList);
  }
  matureTree() {
    for (var i = 0; i < this.treeList.length; i++) {
      if (this.treeList[i].buah > 0 && this.treeList[i].status !== false) {
        console.log(`${this.treeList[i].nama} sedang berbuah`);
      }
    }
  }
  deadTree() {
    for (var i = 0; i < this.treeList.length; i++) {
      if (this.treeList[i].status == false) {
        console.log(`${this.treeList[i].nama} sudah mati`);
      }
    }
  }
}

var grove = new TreeGrove()

grove.inputTree('pohon jengkol', 2, 1.3, 5, true);
grove.inputTree('pohon duren', 4, 1.3, 5, false);
grove.inputTree('pohon pohonan', 1, 1.3, 0, true);
grove.inputTree('pohon mangga', 6, 1.3, 5, false);
grove.inputTree('pohon kumis kucing', 10, 1.3, 5, true);

grove.showAges()
grove.showTree()
grove.matureTree()
grove.deadTree()
