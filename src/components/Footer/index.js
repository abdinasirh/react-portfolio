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
			</div>
            <p className="copyright uk-text-small">© 2022 Abdinasir Hassan</p>
			
		</footer>
	);
}

export default Footer;