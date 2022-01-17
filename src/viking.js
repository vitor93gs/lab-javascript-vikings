// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    }
    else{
      return `${this.name} has died in act of combat` 
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    
    this.health -= damage

    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    }
    else{
      return `A Saxon has died in combat` 
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];  
  
  addViking(vikingObj){
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack(){
    let num1 = Math.floor(Math.random() * this.vikingArmy.length);
    let num2 = Math.floor(Math.random() * this.saxonArmy.length);
    let viking1 = this.vikingArmy[num1];
    let saxon1 = this.saxonArmy[num2];
  
    saxon1.receiveDamage(viking1.attack())

    if(saxon1.health<=0){
    this.saxonArmy.splice(num2,1)
    return "A Saxon has died in combat"
    }
    
  }
  saxonAttack(){
    let num1 = Math.floor(Math.random() * this.vikingArmy.length);
    let num2 = Math.floor(Math.random() * this.saxonArmy.length);
    let viking1 = this.vikingArmy[num1];
    let saxon1 = this.saxonArmy[num2];
  
    viking1.receiveDamage(saxon1.attack())
    if(viking1.health<=0){
      this.vikingArmy.splice(num1,1)
    }
    return `${viking1.name} has received ${saxon1.attack()} points of damage`
  }
  showStatus(){
    if(this.saxonArmy.length===0){
      return `Vikings have won the war of the century!`
    }
    else if(this.vikingArmy.length===0){
      return  `Saxons have fought for their lives and survived another day...`
    }
    else{
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
console.log(War)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
