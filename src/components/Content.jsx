import { useState, useEffect } from 'react';
import './styles/Content.css';
import npm_logo from '/src/assets/SkillsSvg/npm-logo.svg';
import js_logo from '/src/assets/SkillsSvg/js-logo.svg';
import react_logo from '/src/assets/SkillsSvg/react-logo.svg';
import html_logo from '/src/assets/SkillsSvg/html5-logo.svg';
import css_logo from '/src/assets/SkillsSvg/css-logo.svg';
import figma_logo from '/src/assets/SkillsSvg/figma-logo.svg';
import git_logo from '/src/assets/SkillsSvg/git-logo.svg';
import github_logo from '/src/assets/SkillsSvg/github-logo.svg';
import vite_logo from '/src/assets/SkillsSvg/vite-logo.svg';
import bootstrap_logo from '/src/assets/SkillsSvg/bootstrap-logo.svg';
import live_logo from '/src/assets/SkillsSvg/live-logo.svg';
import faChevronUp from '/src/assets/faChevronUp.svg';

const Skill = "Skill";




export const Content = () => {
	const MIN_PHOTO_STATUS = 0;
	const MAX_PHOTO_STATUS = 2;


	const [mainPhoto, setMainPhoto] = useState('./src/assets/Weather_App_Photo.png');
	const [Title, setTitle] = useState('Weather App');
	const [GithubLink, setGithubLink] = useState('https://github.com/koloseki/koloseki.github.io');
	const [LiveLink, setLiveLink] = useState('http://koloseki.me/');
	const [PhotoStatus, setPhotoStatus] = useState(0);
	const [Description, setDescription] = useState('test');

	useEffect(() => {
		switch (PhotoStatus) {
			case 0:
				setMainPhoto('./src/assets/Projects_Photos/weather-laptop.jpg');
				setTitle ("Weather App");
				setGithubLink('https://github.com/koloseki/Weather_App');
				setLiveLink('http://koloseki.me/Weather_App/');
				setDescription('Weather App is a user-friendly application designed to provide accurate and up-to-date weather information. Powered by a robust Weather API, it offers comprehensive data on current weather conditions, forecasts, and more for any location worldwide. Whether planning a trip, staying informed about local weather, or simply curious about weather patterns around the globe, Weather App ensures users stay ahead of the elements. Stay prepared and make informed decisions with Weather App, your reliable companion for all things weather-related.')
				break;
			case 1:
				setMainPhoto('./src/assets/Pomidor_Photo.png');
				setTitle("Pomidor");
				setGithubLink('https://github.com/koloseki/pomidor');
				setLiveLink('http://koloseki.me/pomidor/');
				setDescription('Pomidor is a simple and efficient Pomodoro timer application built on React. Inspired by the popular time management technique, Pomidor helps users maximize productivity and focus by breaking tasks into manageable intervals. With its clean and minimalistic interface, the app allows users to set custom work and break durations, creating a personalized work rhythm. As the timer counts down, Pomidor provides  audio cue to indicate when it\'s time to switch between work and break sessions. This seamless experience ensures users stay on track and maintain a healthy work-life balance. Boost your productivity and conquer your tasks with Pomidor, the ultimate companion for effective time management. ')
				break;
			case 2:
				setMainPhoto('./src/assets/EtchSketch_Photo.png');
				setTitle("Etch a Sketch");
				setGithubLink('https://github.com/koloseki/etchaSketch');
				setLiveLink('http://koloseki.me/etchaSketch/');
				setDescription('Etch-a-Sketch is a delightful web application that brings back the nostalgic charm of the classic drawing toy. Built using HTML, CSS, and JavaScript, this virtual version allows users to express their creativity by drawing and creating artwork on a digital canvas.\n' +
					'\n' +
					'With an intuitive interface, users can effortlessly glide their cursor or use touch input to create colorful trails on the canvas, simulating the experience of drawing on an actual Etch-a-Sketch. ')
				break;
			// Add more cases for additional photos if needed
			default:
				setMainPhoto('./src/assets/Default_Photo.png');
				setTitle("Default");
				break;
		}
	}, [PhotoStatus]);

	function ChangePhoto(status) {
		if (status === '+') {
			if (PhotoStatus < MAX_PHOTO_STATUS) {
				setPhotoStatus(PhotoStatus + 1);
			}
		} else if (status === '-') {
			if (PhotoStatus > MIN_PHOTO_STATUS) {
				setPhotoStatus(PhotoStatus - 1);
			}
		}
	}


	return (
		<>
			<main>
				<div className='About-me'>
					<h2 className="Flip">About Me</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium lectus arcu, eu facilisis sapien ultrices ac. Duis eleifend tempus augue, ac sollicitudin lorem pharetra sed. Vivamus tincidunt eget odio quis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo ipsum. Pellentesque mauris massa, imperdiet ac varius eu, bibendum non sem. Nunc placerat congue convallis. Maecenas eu magna cursus, ullamcorper diam lobortis, eleifend quam. Vivamus ultrices imperdiet orci, scelerisque malesuada ipsum interdum sollicitudin. Donec lacus turpis, scelerisque ac nunc ut, commodo gravida ex. Nam orci metus, convallis non convallis a, aliquet fermentum lacus. Vestibulum sagittis diam at nunc sagittis, a egestas diam vulputate.  </p>
				</div>

				<h2 className="Content">Skills</h2>
				<div className='Skills'>
					<div className='Languages_Tools_container'>
						<h4>Languages and Frameworks</h4>
						<div className='Languages_Tools'>
							<a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_SEJ" rel="noopener"><div className={Skill}><img src={html_logo} alt='html_logo' width='60vw' height='auto' />HTML</div></a>
							<a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_SEJ" rel="noopener"><div className={Skill}><img src={css_logo} alt='css_logo' width='60vw' height='auto' />CSS</div></a>
							<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_SEJ" rel="noopener"><div className={Skill}><img src={js_logo} alt='js_logo' width='60vw' height='auto' />Javascript</div></a>
							<a href='https://react.dev/' target="_SEJ" rel="noopener"><div className={Skill}><img src={react_logo} alt='react_logo' width='60vw' height='auto' />React</div></a>
							<a href='https://getbootstrap.com/' target="_SEJ" rel="noopener"><div className={Skill}><img src={bootstrap_logo} alt='bootstrap_logo' width='60vw' height='auto' />Bootstrap</div></a>
						</div>
					</div>

					<div className='Languages_Tools_container '>
						<h4>Development Tools</h4>
						<div className='Languages_Tools Left'>
							<a href='https://vitejs.dev/' target="_SEJ" rel="noopener"><div className={Skill}><img src={vite_logo} alt='vite_logo' width='60vw' height='auto' />Vite</div></a>
							<a href='https://github.com/' target="_SEJ" rel="noopener"><div className={Skill}><img src={github_logo} alt='git_logo' width='60vw' height='auto' />GitHub</div></a>
							<a href='https://www.npmjs.com/' target="_SEJ" rel="noopener"><div className={Skill}><img src={npm_logo} alt='npm_logo' width='60vw' height='auto' />npm</div></a>
							<a href='https://www.figma.com' target="_SEJ" rel="noopener"><div className={Skill}><img src={figma_logo} alt='figma_logo' width='60vw' height='auto' />Figma</div></a>
							<a href='https://git-scm.com/' target="_SEJ" rel="noopener"><div className={Skill}><img src={git_logo} alt='git_logo' width='60vw' height='auto' />Git</div></a>
						</div>
					</div>
				</div>

				<div className='Projects'>
					<h2 className="Content">Projects</h2>

					<div className='Project'>
						<div className='PhotoSection'>
							<button onClick={() => ChangePhoto('-')}><img src={faChevronUp} width='50px' className="Arrow LeftArrow"/></button>
							<img src={mainPhoto} width='50%' alt='photo of app' />
							<button onClick={() => ChangePhoto('+')}> <img src={faChevronUp} width='50px' className="Arrow RightArrow"/></button>
						</div>
						<div className='TitleLine'>
							<h3>{Title}</h3>
							<div className='links'>
								<a href={GithubLink} target="_SEJ" rel="noopener"><img src={github_logo} className={Skill} alt='github_logo' width='30vw' height='auto' /></a>
								<a href={LiveLink} target="_SEJ" rel="noopener"><img src={live_logo} className={Skill} alt='live_logo' width='30vw' height='auto' /></a>
							</div>
						</div>
						<div className='Description'>
							<p>{Description}</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
