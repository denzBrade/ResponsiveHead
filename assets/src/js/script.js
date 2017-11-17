/**
 * Project Name: Kickoff
 * @description The Kickoff boilerplate js file
 * @author The Kickoff team
 *
 * Need help using JSDoc? Find out more at http://usejsdoc.org/
 */

// their code e.g. npm modules
import ready from 'lite-ready'; // https://github.com/nicbell/liteready
import svg4everybody from 'svg4everybody'; // https://github.com/jonathantneal/svg4everybody

// Global libs that don't return a value
import 'console';
import 'kickoff-welcome.js'; // The Kickoff message in the js console. Remove it if you like :)

// Our code
import menuToggle from './modules/menu-toggle';
// import carousel from '/modules/carousel';

// DOM ready code goes in here
ready(() => {
	svg4everybody({
		polyfill: true, // polyfill <use> elements for External Content
	});

	const elem = document.querySelector('.main-carousel');
    
    let flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true
    });
    
    console.log("you alright yeh");

	// menuToggle();
	// moduleTest(); // this is a test, uncomment this line to try it
});
