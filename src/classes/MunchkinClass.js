export class munchkin {
    constructor(tag, name, gender){
        this.tag = tag
        this.name = name
        this.gender = gender 
    }
}

export class MunchkinStats {
    constructor(tag, name, gender, level = 1, gear = 0, mod = 0){
        this.tag = tag
        this.name = name
        this.gender = gender
        this.level = level,
        this.gear = gear,
        this.mod = mod
    }
}