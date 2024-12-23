import "./styles.css";

const contact = ()=>{
const mainDiv = document.getElementById('content');
// create menu DIV
const menuHeadingDiv = document.createElement('div');

//Creates a heading
const menuHeading = Object.assign(document.createElement('h2'), { textContent: 'Contact Us' });
menuHeadingDiv.appendChild(menuHeading);
//create course Div
const menuCourseDiv = document.createElement('div');
menuCourseDiv.classList.add('styleDiv');
//Creates a course heading
const coursetitle = Object.assign(document.createElement('h5'), { textContent: 'Last Hop Contact'});
coursetitle.classList.add('headingtext');
menuCourseDiv.appendChild(coursetitle);

mainDiv.appendChild(menuHeadingDiv);
mainDiv.appendChild(menuCourseDiv);


return mainDiv;
}

export default contact;