import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/abdinasirh"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
				<a
					href="https://www.linkedin.com/in/abdinasirh/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="Linkedin"
						className="logo"
					></img>
				</a>
				<p className="copyright"><small>© 2022 Copyright: Abdinasir Hassan</small></p>
			</div>
           
			
		</footer>
	);
}

export default Footer;