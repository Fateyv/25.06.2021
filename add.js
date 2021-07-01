class Human {
    constructor(data) {
        this.name = data.name
        this.surname = data.surname
        this.age = data.age
        // this.profession = data.profession
    }

    whoIsIt() {
        alert(`This is ${this.name} ${this.surname}`)
    }
}

class Footballer extends Human {
    constructor(data) {
        super(data) 
        this.profession = data.profession
        this.position = data.position
    }

    whatIsHisProf() {
        alert(`${this.name} ${this.surname} is ${this.profession} and he plays in position ${this.position}`)
    }

}

class HisFamily extends Footballer {
    constructor(data) {
        super(data) 
        this.wife = data.wife
        this.children = data.children
    }

    createFamily() {
        alert(`${this.name} ${this.surname} is married to ${this.wife} and they have ${this.children}`)
    }

}

const messi = new Human({
    name: 'Lionel',
    surname: 'Messi',
    age: 34,
})

messi.whoIsIt()

const messiFootballer = new Footballer({
    name: 'Lionel',
    surname: 'Messi',
    age: 34,
    profession: 'footballer',
    position: 'attack',
})

messiFootballer.whatIsHisProf()

const familyMessi = new HisFamily({
    name: 'Lionel',
    surname: 'Messi',
    wife: 'Antonella',
    children: 'three sons',
})


familyMessi.createFamily()

