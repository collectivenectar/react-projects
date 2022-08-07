import React from 'react';
import FooterNav from './Nav/FooterNav';

const Footer = () => {
	const navItems = ['home', 'frontend', 'backend'];

	return (
		<footer className="shadow-sm bg-black mt-auto">
			<FooterNav />
		</footer>
	);
};

export default Footer;
