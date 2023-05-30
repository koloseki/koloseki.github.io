import './styles/Content.css'

export const Content = () => {
	return (
		<>
			<main>
				<div className='About-me'>
					<h2 className="Flip">About Me</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium lectus arcu, eu facilisis sapien ultrices ac. Duis eleifend tempus augue, ac sollicitudin lorem pharetra sed. Vivamus tincidunt eget odio quis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo ipsum. Pellentesque mauris massa, imperdiet ac varius eu, bibendum non sem. Nunc placerat congue convallis. Maecenas eu magna cursus, ullamcorper diam lobortis, eleifend quam. Vivamus ultrices imperdiet orci, scelerisque malesuada ipsum interdum sollicitudin. Donec lacus turpis, scelerisque ac nunc ut, commodo gravida ex. Nam orci metus, convallis non convallis a, aliquet fermentum lacus. Vestibulum sagittis diam at nunc sagittis, a egestas diam vulputate.  </p>
				</div>
					<h2 className="Content">Skills</h2>
				<div className='Skills'>
					<div className='Languages'>
						Javascript
					</div>
					<div className='Tools'>
						Vite
					</div>
				</div>
				<h2 className="Content">Projects</h2>
				<div className='Projects'>
					<div className='Project'><h1>BIG PICTURE</h1>	</div>
				</div>
			</main>
		</>
	)
}