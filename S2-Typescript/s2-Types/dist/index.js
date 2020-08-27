// boolean
var notFalse = true;
// number 
var thousand = 1000;
var ten = 10;
// string
var color = "blue";
var favQuote = "Beri aku " + thousand + " orang tua, niscaya akan kucabut semeru dari akarnya. Beri aku " + ten + " pemuda niscaya akan kuguncang dunia";
// null and undefined
var asd = undefined;
var zxc = null;
// array
var marvelSuperheroes = ['Ironman', 'Captain America', 'Thor'];
var dcSuperheroes = ['Batman', 'Superman', 'Shazam'];
// object
var employee = {
    name: 'Bob',
    age: 24,
    division: 'Marketing'
};
// tuple
var player;
player = ['Kobe Bryant', [8, 24]];
// enum
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
;
var sizeName = size[1];
var sizeNumber = size.Medium;
// any
var anyType = 'Don\'t use this type unless you really have to!!!';
anyType = player;
// void
var sing = function () {
    console.log('This is getting good!!');
};
// function
var run = function () {
    console.log('I\'m getting tired');
    return 'I\'ll rest for a minute';
};
// never
var error = function () {
    throw Error('We found an error');
};
var kobe = function (player) {
    console.log("Can i get your autograph " + player.name + "?");
};
// classes
