import React from 'react';

const MainNav = () => {
	const navItems = ['home', 'frontend', 'backend'];

	return (
		<nav className="py-6 w-[90%] mx-auto flex justify-between items-center text-white">
			<span className="font-bold cursor-pointer">LOGO/NAME</span>
			<ul className="flex gap-x-8 uppercase font-semibold">
				{navItems.map((item) => (
					<li className="cursor-pointer" key={item}>{item}</li>
				))}
			</ul>
		</nav>
	);
};

export default MainNav;
