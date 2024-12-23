import "./styles.css";

const menu = ()=>{
const mainDiv = document.getElementById('content');
// create menu DIV
const menuHeadingDiv = document.createElement('div');

//Creates a heading
const menuHeading = Object.assign(document.createElement('h2'), { textContent: 'Menu' });
menuHeading.classList.add('headingtext');
menuHeadingDiv.appendChild(menuHeading);
//create course Div
const menuCourseDiv = document.createElement('div');
menuCourseDiv.classList.add('styleDiv');
//Creates a course heading
const coursetitle = Object.assign(document.createElement('h4'), { textContent: 'Beverages' });
coursetitle.classList.add('headingtext');
menuCourseDiv.appendChild(coursetitle);

mainDiv.appendChild(menuHeadingDiv);
mainDiv.appendChild(menuCourseDiv);


return mainDiv;
}

export default menu;