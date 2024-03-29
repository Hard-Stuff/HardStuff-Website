import FlexBox from "../../components/FlexBox";
import agri_testing from "../../assets/images/agri_testing.png";
import cups_prototype from "../../assets/images/cups_prototype.png";
import polyt_lecture from "../../assets/images/polyt_lecture.png";

// import local icons

export const MakeTestTeach = (props) => {
	const elements = [
		{
			title: (
				<span>
					we <span className="hardstuff-no-colour">Make Stuff</span>
				</span>
			),
			img: cups_prototype,
			content: (
				<p className="pillar-content">
					You need your core minimum viable product to demonstrate to customers, investors, and stakeholders
					what your vision can really be!
					<br />
					<br />
					We offer hyper rapid prototype development services across mechanical, electrical, environmental,
					and sustainable engineering. We build iteratively, stick to the core features, and move fast, all to
					unlock the next technical phase of your venture.
				</p>
			),
		},
		{
			title: (
				<span>
					we <span className="hardstuff-no-colour">Test Stuff</span>
				</span>
			),
			img: agri_testing,
			content: (
				<p className="pillar-content">
					Haven't yet tested your solution out on the field and validated your core solution?
					<br />
					<br />
					We'll conduct effective field testing with your team and end-users to ensure your solution is the
					right fit for the problem you're addressing.
				</p>
			),
		},
		{
			title: (
				<span>
					we <span className="hardstuff-no-colour">Teach Stuff</span>
				</span>
			),
			img: polyt_lecture,
			content: (
				<p className="pillar-content">
					Are you early in your startup journey and not sure on the technologies and impact directions to
					take?
					<br />
					<br />
					We turn engineers into CTOs, working directly with startups and with incubators & accelerators to
					inspire hardware startups to achieve their maximum impact potential. <br />
					We do this through workshops on understanding the Minimum Viable Product, cardboard prototyping, and
					why now - in the midst of a "software age" yet myriad of climate and societal challenges - is the
					time to make hard stuff!
				</p>
			),
		},
	];

	return (
		<>
			<section>
				<div className="content">
					<FlexBox defaultValue={0} elements={elements} imgIsBackground={true} />
					<br />
				</div>
			</section>
		</>
	);
};
