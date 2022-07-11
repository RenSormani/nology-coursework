import Translator from './translator.js';
import { alphabet, morse } from './data.js';


const translator = new Translator(alphabet, morse);

const translateToMorse = () => {
	const element = document.getElementById('input');
	const translation = translator.text2Morse(element.value);
	document.getElementById('output').innerHTML = translation;
};

document.getElementById('text2Morse').addEventListener('click', () => {
	console.log("translating to morse")
	translateToMorse();
});



const translateToEnglish = () => {
	const element = document.getElementById('input');
	const translation = translator.morse2Text(element.value);
	document.getElementById('output').innerHTML = translation;
};

document.getElementById('morse2Text').addEventListener('click', () => {
	console.log("translating to eng")
	translateToEnglish();
});