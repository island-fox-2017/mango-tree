"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.max = 10;
    this.jumlahBuah = [];
    this.harvested = null;
    this.status = true;
  }

  getAge() {
    return this.umur;
  }

  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.jumlah;
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


  // Get current states here

  // Grow the tree
  grow() {
    if(this.umur < 20)
    {
      this.umur++;
      this.tinggi += Math.floor((Math.random() * 5) + 1);
    }
    else
    {
      this.status = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let rand = Math.floor((Math.random() * this.max) + 1);
    for(let i = 0; i < rand; i++)
    {
      this.jumlahBuah.push(new Mango());
    }
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

class Mango {
  // Produce a mango
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
    return status
  }

}

  //  let mangoTree = new MangoTree()
  //    mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    console.log(mangoTree.jumlahBuah);
  //    console.log(mangoTree.harvest());


  // driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.status != false)


// Release 1
class AppleTree {

    // Initialize a new MangoTree
    constructor() {
      this.umur = 0;
      this.tinggi = 0;
      this.max = 10;
      this.jumlahBuah = [];
      this.harvested = null;
      this.status = true;
    }

    getAge() {
      return this.umur;
    }

    getHeight() {
      return this.tinggi;
    }
    getFruits() {
      return this.jumlah;
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


    // Get current states here

    // Grow the tree
    grow() {
      if(this.umur < 20)
      {
        this.umur++;
        this.tinggi += Math.floor((Math.random() * 5) + 1);
      }
      else
      {
        this.status = false;
      }
    }

    // Produce some mangoes
    produceMangoes() {
      let rand = Math.floor((Math.random() * this.max) + 1);
      for(let i = 0; i < rand; i++)
      {
        this.jumlahBuah.push(new Mango());
      }
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

class Apple {
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
    return status
  }
}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
