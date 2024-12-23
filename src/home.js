import heroImaage from "./hero.jpg";
import heroImage from "./hero.webp";
import "./styles.css";

export default function home(){


const mainDiv = document.getElementById('content');
const heroDiv = document.createElement('div');
heroDiv.classList.add('heroheroDiv');
//creating heading
const heading = document.createElement('h1');
heading.textContent = 'Last Hop';
//creating images
const img = document.createElement('img');
img.src = heroImage;
img.classList.add('heroImage');

//creating subheading
const subheading = document.createElement('p');
subheading.textContent = 'Craft beer bar and brewery tap room, cafe and pizza restaurant Live music every Thursday and weekends Hold your party here!';


//appending to heroDiv
heroDiv.appendChild(heading);
heroDiv.appendChild(subheading);
heroDiv.appendChild(img);

//New Intro Div
const introDiv = document.createElement('div');
introDiv.classList.add('styleDiv');
const introText = Object.assign(document.createElement('p'),{ textContent: 'Welcome to The Last Hop - a great place to sit by the River Thames and enjoy a pint of our wide range of fantastic craft beers , accompanied by a delicious handmade pizza! You can dance the night away at one of our regular live music gigs; laugh out loud at our comedy events; test your knowledge at one of our quizzes; or cheer your sports team to victory as they play on our big screen!' })
introDiv.appendChild(introText);


mainDiv.appendChild(heroDiv);
mainDiv.appendChild(introDiv);


return mainDiv;

}