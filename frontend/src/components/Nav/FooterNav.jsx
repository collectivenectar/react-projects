import React from 'react';

const FooterNav = () => {
	const navItems = ['home', 'frontend', 'backend'];

	return (
		<nav className="uppercase py-3 w-[90%] mx-auto">
			<ul className="text-white text-sm flex uppercase justify-end gap-x-4 font-semibold">
				{navItems.map((item) => (
					<li className="cursor-pointer">{item}</li>
				))}
			</ul>
		</nav>
	);
};

export default FooterNav;
