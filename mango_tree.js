"use strict"

// release 0

class FruitTree {
  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.buah = [];
    this.statusKesehatan = true;
    this.MaxUmur = 26;
  }
  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.buah;
  }
  getHealtyStatus() {
    return this.statusKesehatan;
  }
  // Get current states here
  // Grow the tree
  grow(maxUmur) {
    this.umur++;
    if (this.umur < maxUmur) {
      if (this.umur <= (maxUmur-10)) {
        this.tinggi = this.tinggi + parseFloat((Math.random() * 7).toFixed(2));
      }
    }
    if (this.umur == maxUmur) {
      this.statusKesehatan = false;
    }
  }
  // Produce some mangoes
  produceFruits() {
    let jumlahBuahdiProduksi = Math.ceil(Math.random() * 15);
    for (let i = 0; i < jumlahBuahdiProduksi; i++) {
      this.buah.push(new Fruit);
    }
  }
  // Get some fruits
  harvest() {
    let jmlGood = 0;
    let jmlBad = 0;

    for (let i = 0; i < this.buah.length; i++) {
      if (this.buah[i].quality == 'good') {
        jmlGood++;
      } else {
        jmlBad++;
      }
    }
    let fruitsHarvested = this.buah.length;
    this.buah = [];
    return `${fruitsHarvested} (${jmlGood} good, ${jmlBad} bad)`
  }
}

class Fruit {
  // Produce a mango
  constructor() {
    this.quality = this.cekKualitasBuah();
  }
  cekKualitasBuah() {
    let kualitasAcak = Math.floor(Math.random() * 2);

    return (kualitasAcak == 0)? 'bad': 'good'
  }
}

class MangoTree extends FruitTree {
  constructor(name) {
    super();
    this.name = name;
    this.maxUmur = 26;
  }
}

class Mango extends Fruit{
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
  constructor (name) {
    super();
    this.name = name;
    this.maxUmur = 17;
  }
}
class Apple extends Fruit {
}

let mangoTree = new MangoTree('Mango');
console.log(`The ${mangoTree.name} tree is alive! :smile:`);
do {
  mangoTree.grow(26);
  mangoTree.produceFruits();
  console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} m| Fruits harvested = ${mangoTree.harvest()}`)
}
while (mangoTree.statusKesehatan != false);
console.log(`The ${mangoTree.name} tree has met its end. :sad:`);
console.log('===========================================================================');

let appleTree = new AppleTree('Apple');
console.log(`The ${appleTree.name} tree is alive! :smile:`);
do {
  appleTree.grow(17);
  appleTree.produceFruits();
  console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.tinggi} m| Fruits harvested = ${appleTree.harvest()}`)
}
while (appleTree.statusKesehatan != false);
console.log(`The ${appleTree.name} tree has met its end. :sad:`);
console.log('===========================================================================');
// Release 2
class PearTree extends FruitTree {
  constructor(name) {
    super();
    this.name = name;
    this.maxUmur = 15;
  }
}

class Pear extends Fruit {
}

let pearTree = new PearTree('Pear');
console.log(`The ${pearTree.name} tree is alive! :smile:`);
do {
  pearTree.grow(15);
  pearTree.produceFruits();
  console.log(`[Year ${pearTree.umur} Report] Height = ${pearTree.tinggi} m| Fruits harvested = ${pearTree.harvest()}`)
}
while (pearTree.statusKesehatan != false);
console.log(`The ${pearTree.name} tree has met its end. :sad:`);
console.log('===========================================================================');

// Release 3
class TreeGrove {
  constructor() {
    this.pepohonan = []
  }
  inputTree(jenis, umur, tinggi, buah, statusKesehatan) {
    let pohon = new jenis();
    pohon.name = jenis.name;
    pohon.umur = umur;
    pohon.tinggi = tinggi;
    pohon.buahBuahan = [];
    pohon.jmlBuah = buah;
    pohon.statusKesehatan = statusKesehatan;

    this.pepohonan.push(pohon);
  }
  showTrees() {
    for(let i = 0; i < this.pepohonan.length; i++) {
      console.log(this.pepohonan[i].name);
    }
  }
  showAges() {
    for (let i = 0; i < this.pepohonan.length; i++) {
      console.log(`${this.pepohonan[i].name}, Umur: ${this.pepohonan[i].umur}`);
    }
  }
  matureTrees() {
    let mature = '\n';
    for (let i = 0; i < this.pepohonan.length; i++) {
      if ((this.pepohonan[i].jmlBuah > 0) && (this.pepohonan[i].statusKesehatan)) {
        mature += `${this.pepohonan[i].name} \n`;
      }
    }
    return mature;
  }
  deadTrees() {
    let dead = '\n';
    for (let i = 0; i < this.pepohonan.length; i++) {
      if (!this.pepohonan[i].statusKesehatan) {
        dead += `${this.pepohonan[i].name} \n`;
      }
    }
    return dead;
  }
}

let treeGrove = new TreeGrove();

treeGrove.inputTree(MangoTree, 7, 12, 102, true);
treeGrove.inputTree(AppleTree, 4, 8, 14, true);
treeGrove.inputTree(PearTree, 19, 18, 0, false);
treeGrove.showTrees();
treeGrove.showAges();
console.log(`Ini pohon yang sedang berbuah: ${treeGrove.matureTrees()}`);
console.log(`Ini pohon yang sudah mati: ${treeGrove.deadTrees()}`);
