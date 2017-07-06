"use strict"

// release 0
class FruitTree {
  constructor(age = 0, height = 0, fruit = 0, status = true, name){
    this.name = name;
    this.umur = age;
    this.tinggi = height;
    this.jumlahBuah = [];
    this.harvested = null;
    this.status = status;
    this.fruit = this.produceFruit(fruit);
  }

  getAge(){
    return this.umur;
  }

  getHeight(){
    return this.tinggi;
  }

  getFruits(){
    return this.jumlahBuah;
  }

  getHealtyStatus() {
    if(this.status)
    {
      return 'sehat';
    }
    else
    {
      return 'sakit';
    }
  }

  // Grow the tree
  grow() {
    if(this.umur < 20)
    {
      this.umur++;
      this.tinggi += Math.floor((Math.random() * this.maxGrow) + 1);
    }
    else
    {
      this.status = false;
    }
  }

  // Produce some mangoes
  produceFruit(jumlah = Math.floor((Math.random() * this.max) + 1)) {
    let rand = jumlah;
    for(let i = 0; i < rand; i++)
    {
      this.jumlahBuah.push(new Mango());
    }

    return this.jumlahBuah.length;
  }

  // Get some fruits
  harvest() {
    var good = 0;
    var bad = 0;

    for(let i = 0 ; i < this.jumlahBuah.length; i++)
    {
      if(this.jumlahBuah[i].status == 'bad')
      {
        good++;
      }
      else
      {
        bad++;
      }
    }

    let total = this.jumlahBuah.length;

    this.jumlahBuah = [];
    this.harvested =  `${total} (${good} good, ${bad} bad)`;
  }

}
class Fruit {
  constructor() {
    this.status = this.quality();
  }

  quality(){
    let status;
    let rand = Math.floor((Math.random() * 2) + 1);
    if(rand == 1)
    {
      status = 'good';
    }
    else
    {
      status = 'bad';
    }
    return status;
  }
}

//child
// mango tree
class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor(age = 0, height = 0, fruit = 0, status = true, name = 'MangoTree') {
    super(age, height, fruit, status, name);
    this.max = 10;
    this.maxGrow = 5
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }

}

// Apple tree
class AppleTree extends FruitTree {
  constructor(age = 0, height = 0, fruit = 0, status = true, name = 'AppleTree'){
    super(age, height, fruit, status, name);
    this.max = 20;
    this.maxGrow = 3;
  }
}

class Apple extends Fruit{
  constructor(){
    super();
  }
}

// Pear tree
class PearTree extends FruitTree{
  constructor(age = 0, height = 0, fruit = 0, status = true, name = 'PearTree'){
    super(age, height, fruit, status, name);
    this.max = 15;
    this.maxGrow = 4;
  }
}

class Pear extends Fruit{
  constructor(){
    super();
  }
}


// driver code untuk release 0 pohon mangga
console.log('\n------------------------------Pohon Mangga------------------------------\n');
 let mangoTree = new MangoTree()
 do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.status != false)

// driver code untuk release 0 pohon apel
console.log('\n------------------------------Pohon Apple------------------------------\n');
 let appleTree = new AppleTree()
 do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.tinggi} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.status != false)

console.log('\n------------------------------Pohon Pear------------------------------\n');
 let pearTree = new AppleTree()
 do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree.umur} Report] Height = ${pearTree.tinggi} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.status != false)

// Release 2


// Release 3
class TreeGrove {
  constructor(){
    this.tree = [];
  }

  inputTree(treeName, age, height, fruit, status){
    if(treeName == 'MangoTree')
    {
      this.tree.push(new MangoTree(age, height, fruit, status));
    }
    else if(treeName == 'AppleTree')
    {
      this.tree.push(new AppleTree(age, height, fruit, status));
    }
    else
    {
      this.tree.push(new PearTree(age, height, fruit, status));
    }
  }

  show_ages(){
    for(let i = 0; i < this.tree.length; i++)
    {
      console.log(`${this.tree[i].name} berumur ${this.tree[i].umur}`);
    }
  }

  show_trees(){
    for(let i = 0; i < this.tree.length; i++)
    {
      console.log(`${this.tree[i].name} memiliki tinggi ${this.tree[i].tinggi}m memiliki buah sebanyak ${this.tree[i].jumlahBuah.length}`);
    }
  }

  mature_trees(){

  }

  dead_trees(){
    console.log('--------list dead trees-------------');
    for(let i = 0; i < this.tree.length; i++)
    {
      if(this.tree[i].status == false)
      {
        console.log(`${this.tree[i].name} berumur ${this.tree[i].umur} telah tiada`);
      }
    }
  }

  nextYear(){
    for(let i = 0; i < this.tree.length; i++)
    {
      this.tree[i].grow();
      this.tree[i].produceFruit();
    }
  }


}

let tree = new TreeGrove();
tree.inputTree('MangoTree', 3, 1.8, 7, true);
tree.inputTree('PearTree', 3, 1.8, 9, true);
tree.inputTree('AppleTree', 4, 1.2, 5, true);
tree.inputTree('AppleTree', 40, 1.2, 5, false);
tree.inputTree('PearTree', 35, 1.8, 19, false);


tree.show_ages();
tree.show_trees();
tree.dead_trees();
tree.nextYear();
tree.nextYear();
tree.nextYear();
tree.nextYear();
tree.nextYear();
tree.nextYear();
tree.show_trees();
