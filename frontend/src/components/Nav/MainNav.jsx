import React from 'react';

const MainNav = () => {
	const navItems = ['home', 'frontend', 'backend'];

	return (
		<nav className="py-6 w-[90%] mx-auto flex justify-between items-center text-white">
			<span className="font-bold">LOGO/NAME</span>
			<ul className="flex gap-x-8 uppercase font-semibold">
				{navItems.map((item) => (
					<li className="cursor-pointer">{item}</li>
				))}
			</ul>
		</nav>
	);
};

export default MainNav;
