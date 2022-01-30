let acc = document.getElementsByClassName('acc');
/* creates an array of objects, acc is an array of the "more" buttons */
/* acc is the class to make this work */

/* below loops through the array */

// for (let i = 0; i < acc.length; i++){
// 	acc[i].onclick = function(){
// 		// console.log('click')
// 		let sib = this.nextElementSibling.style.display;
// 		if (sib == 'none'){
// 			this.nextElementSibling.style.display = 'block';
// 		}
// 		else {
// 			this.nextElementSibling.style.display = 'none';
// 		}
// 	};
// };

/* i is the counter, how many times it will run, how many times it will run */
/* runs through the loop, 0 is less than 1, 1 is less than 2, 2 is not less than 2 */
/* count restarts on each page, more will automatically count on the page top to bottom */
/* .length is the count of the variables */
/* How many are in there so the loop knows when to stop */

/* grab the first more button, and onClick, do this */
/* for THIS more button, go to the next sibling */

/* works on every page, hides and shows by class="acc" */

/* css would show up as display none, except real estate. Hide parent and show next sibling with next button. */
/* previousElementSibling to hide the parent */