export class munchkin {
    constructor(id, name, gender){
        this.id = id
        this.name = name
        this.gender = gender 
    }
}

export class MunchkinStats {
    constructor(id, name, gender){
        this.id = id
        this.name = name
        this.gender = gender
        this.level = 0,
        this.gear = 0,
        this.mod = 0
    }
    /*subLevel(){
        this.level--
    }
    addLevel(){
        this.level++
    }
    subGear(){
        this.gear--
    }
    addGear(){
        this.gear++
    }
    subMod(){
        this.mod--
    }
    addMod(){
        this.mod++
    }
    switchGender(){
        this.gender == 'M' ? this.gender = 'F' : this.gender = 'M'
    }*/
}