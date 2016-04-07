(function(){
	'use strict';

	angular
	    .module('myApp')
	    .factory('Xmen',Xmen);

	function Xmen(){
		var Xmen = {};
        Xmen.cast = [{
        name : 'Hugh Jackman',
        code: 'The Wolverine',
        character: 'James "Logan" Howlett'},
        {name: 'Patrick Stewart',
         code: 'Professor X',
         character: 'Charles Xavier'},
        {name: 'Ian McKellen',
         code: 'Magneto',
         character: 'Erik Lehnsherr'},
        {name: 'James Marsden',
         code: 'Cyclops',
         character: 'Scott Summers'},
        {name: 'Famke Janssen',
         code: 'Phoenix',
         character: 'Jean Grey'},
        {name: 'Halle Berry',
         code: 'Storm',
         character: 'Ororo Munroe'},
        {name: 'Shawn Ashmore',
         code: 'Iceman',
         character: 'Bobby Drake'},
        {name: 'Anna Paquin',
         code: 'Rogue',
         character: 'Marie D Ancanto'},
        {name: 'Rebecca Romijn',
         code: 'Mystique',
         character: 'Raven Darkhölme'},
        {name: 'Ellen Page',
         code: 'Shadowcat',
         character: 'Kitty Pryde'},
        {name: 'Aaron Stanford',
         code: 'Pyro',
         character: 'John Allerdyce'},
        {name: 'Kea Wong',
         code: 'Jubilee',
         character: 'Jubilation Lee'},
        {name: 'Kelsey Grammer',
         code: 'Beast',
         character: 'Henry "Hank" McCoy'},
        {name: 'Daniel Cudmore',
         code: 'Colossus',
         character: 'Piotr "Peter" Rasputin'},
        {name: 'Brian Cox',
         code:'',
         character: 'William Stryker'},
        {name: 'Olivia Williams',
         code: '',
         character: 'Moira MacTaggert'},
        {name: 'Ryan Reynolds',
         code: 'Deadpool/Weapon XI',
         character: 'Wade Wilson'},
        {name: 'Lucas Till',
         code: 'Havok',
         character: 'Alex Summers'}
        ];
    return Xmen;
    }
	
})();