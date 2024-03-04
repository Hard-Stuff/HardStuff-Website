import "../App.css";

const AboutUs = () => {
	return (
		<>
			<section className="section">
				<h1 className="hardstuff-no-colour">About Us</h1>
				<div className="content">
					<h2>Our Mission</h2>
					<p>
						<span className="hardstuff-no-colour">Our mission</span> is to empower entrepreneurs and
						hardware startups providing them with the proof, hardware, support, resources, and partnerships
						they need to bring their groundbreaking ideas to life.
						<br />
						<br />
						Together, we'll shape a sustainable future for generations to come.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="content">
					<h2>Our Vision</h2>
					<p>
						<span className="hardstuff-no-colour">We Envision a World</span> with a stable and safe climate,
						without plastic in our oceans, with nature thriving, without hunger, and where everyone
						everywhere is safe.
						<br />
						<br />
						We know how far away from that world we are today, and how all of this stuff, this really really
						hard stuff, requires hard work and hardware to change the game.
					</p>
				</div>
			</section>
			{/* <section className="section">
                <div className="content">
                    <h2>We work with...</h2>
                    <p>
                       We work with some of <span className="hardstuff-no-colour">the most impactful hardware startups in the World</span>.
                       <br />
                       <br />
                        We love startups building solutions to Global problems.
                    </p>
                </div>
            </section> */}
		</>
	);
};

export default AboutUs;
