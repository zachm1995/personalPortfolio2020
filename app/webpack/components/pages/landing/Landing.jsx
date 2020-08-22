import React, { useState, useEffect } from "react";
import Typed from "react-typed";

export default function Landing(props) {
	return (
		<div className="landing">
			<div className="landing__centered-box">
				<div
					className={`hoverable`}
					data-animate={JSON.stringify({
						animationName: "fade",
						animationDirection: 'down',
						animationSpeed: "slow",
						animationOn: ['enter'],
						reanimate: true,
					})}
				>
					Zach Mumbauer
				</div>
				<div>
					<Typed
						strings={["Tech-centric pantologist"]}
						typeSpeed={40}
						startDelay={1200}
					/>
				</div>
			</div>
			{props.children}
		</div>
	);
}
