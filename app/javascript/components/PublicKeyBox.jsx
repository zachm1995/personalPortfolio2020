import React from "react";

export default function PublicKeyBox(props) {
	function copyKey(e) {
		var key = document.getElementById("publicKey").textContent;
		var element = e.target;
		document.execCommand("copy");
		element.innerHTML = "Key Copied";
		element.classList.add("clicked");
	}

	return (
		<div className="code-box-wrapper">
			<div className="code-box-container">
				<code id="publicKey" className="code-box">
					-----BEGIN PGP PUBLIC KEY BLOCK-----
					mQINBF5IRJ4BEADNzLl0PCYM94jxIvYydMHB1nfRnbZNW2st5PPT2JvDAnw8n3QF
					gAXsfI6r4Gmk4mHi/TgiJjUUqODnUlYXYro595ZVGcpZvq07d7iH+cr+tSlaA8Zs
					xQUCaSD43gcCy99MHpxnC68QF5SjqZLgqGGhGLvJGs3BXN7eeXHjbLUHhsCKl3W+
					8t3UcYmSTg6zTYZSJvZr094YfBlmKSvhuplMREtMaGZ3rj2R7TyBPqzvidHsqv3w
					CxKcGtScae8cKNM6l0D3Ctbzj6TdON8nHyQXG8z7a18S2FD/XB9dB3mQ/yHk6Fb0
					6cZfuxO2rbqyenquu/+dVktgpWkondq/aS7+C/Nkylwt5HoNbbeEXG9oXuQPnPBV
					xEn30g36XdHFWtel9TJ9fp5GnA8CVMr02rwNjjiZXfWxfv1cF3UPLsNfT+O75XHb
					hkNnreLK+WJbBeqhsHc4bW4FRpEu1iG8AO/GC5Loc1T8/+ZnVvMz/uIXWE/f864K
					KY8laQz6O69nGqWTtIibJf1uJrpXbPsF0qVex25b4OEpj08ivAk5UNSpHa7Gq72a
					gx430cXrXMbnXmik57+oBAZjPpJLAvqa0HXlnf+KH+DoB4zcXfDFNIFbwrbUMLOJ
					KUTj8RgALCqpM8oLlcs9L/AMNqmE7vKZ/81BI2RxBtZUDaoKAn1bXFbuQwARAQAB
					tB9aYWNoIE11bWJhdWVyIDx6YWNoQHphY2gxOS5jb20+iQJUBBMBCAA+FiEEvetE
					aaZaQCsr2OtA7bEZjx5Pz2AFAl5IRJ4CGwMFCQeGH4AFCwkIBwIGFQoJCAsCBBYC
					AwECHgECF4AACgkQ7bEZjx5Pz2BKZRAAyZvLg26+VA5BcXmQg8+JFe/bqVrXorxD
					MIGMldmdwiKrQEA6T+ExrybtcV3LZYBolZIlVuKVhCvotNpZb1plVrbfIf8r//zn
					me/O2Ax3NOXeSjqzhahsMr9ajR6WmlWVSRWtI7vHDy1xZZuBRyj8TtYUavDMCkP3
					wDUQlLJDd/gh6zejGA2fQMQ9d5J6sQWQAWBkJ8+OSBSqNqG6HyZL8f9HYL725LzJ
					XkEto+q+C72KlcxtWMUkZypjGshAMJrj7M7ONgiR2FHCKqR0OZEErj+6DTAr1Jaf
					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
					aYSyay5fiQ== =4wiV -----END PGP PUBLIC KEY BLOCK-----
				</code>
			</div>
			<div className="spacer"></div>
			<div
				className="gradient-button"
				onClick={(e) => copyKey(e)}
				onMouseEnter={() => props.handleHoverableElement(true)}
				onMouseLeave={() => props.handleHoverableElement(false)}
			>
				Copy Public Key
			</div>
		</div>
	);
}
