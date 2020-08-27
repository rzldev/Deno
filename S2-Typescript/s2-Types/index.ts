// boolean
let notFalse: boolean = true;

// number 
let thousand: number = 1000;
let ten: number = 10;

// string
let color: string = "blue";
let favQuote: string = `Beri aku ${ thousand } orang tua, niscaya akan kucabut semeru dari akarnya. Beri aku ${ ten } pemuda niscaya akan kuguncang dunia`;

// null and undefined
let asd: undefined = undefined;
let zxc: null = null;

// array
let marvelSuperheroes: string[] = [ 'Ironman', 'Captain America', 'Thor' ];
let dcSuperheroes: Array<string> = [ 'Batman', 'Superman', 'Shazam' ];

// object
let employee: object = {
    name: 'Bob',
    age: 24,
    division: 'Marketing'
};

// tuple
let player: [ string, Array<number> ];
player = [ 'Kobe Bryant', [ 8, 24 ] ];

// enum
enum size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = size[1];
let sizeNumber: number = size.Medium;

// any
let anyType: any = 'Don\'t use this type unless you really have to!!!';
anyType = player;

// void
let sing = (): void => {
    console.log('This is getting good!!');
}

// function
let run = (): string => {
    console.log('I\'m getting tired');
    return 'I\'ll rest for a minute'
}

// never
let error = (): never => {
    throw Error('We found an error');
}

// interface
interface nbaPlayer {
    name: string,
    jerseyNumber: number,
    team?: string
}

let kobe = (player: nbaPlayer) => {
    console.log(`Can i get your autograph ${ player.name }?`);
}

// classes
class Animal {
    public sing: string = 'lalalala';
    
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return this.sing
    }
}

let lion = new Animal('RAAWWWRRRRR!!!')
lion.greet()
lion.sing