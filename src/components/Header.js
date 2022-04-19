import React from "react";
import "./Header.css";
import { ArrowDropDown } from "@material-ui/icons";

const Header = () => {
	return (
		<div className="header__container">
			<div className="header">
				<img className="header__logo" src="/logo.png" alt="Instaread" />
				<div className="header__navBar">
					<div className="header__navBarItem">Discover</div>
					<div className="header__navBarItem">Search</div>
					<div className="header__navBarItem header__navBarItem-active">
						Try Instead
					</div>
					<div className="header__navBarItem">
						Login <ArrowDropDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
