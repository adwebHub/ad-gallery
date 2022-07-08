import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../FooterStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		Adweb - The Digital Hub
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Address</Heading>
			<FooterLink>Miltiadou 9</FooterLink>
			<FooterLink>Chalandri Attikis</FooterLink>
			<FooterLink>Athens T.K 15232</FooterLink>
		</Column>
		<Column>
			<Heading>Telephone</Heading>
			<FooterLink>+30 210 6843084</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink>info@adweb.gr </FooterLink>
			<div style={{flexDirection: 'row'}}>
			<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
			<FooterLink style={{marginLeft: '5px'}} href="https://www.google.com/maps/place/AdWeb/@38.0187227,23.7965633,17z/data=!3m1!4b1!4m5!3m4!1s0x149a599056b7816d:0x107365918122b8fa!8m2!3d38.0187293!4d23.7965667" target="_blank">Headquarters</FooterLink>
			</div>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/AdWebnetwork/" target="_blank">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.linkedin.com/company/adweb-ltd/" target="_blank">
			<i className="fab fa-linkedIn">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	<div style={{float: "right", color: "white"}}>©2022 adweb.gallery.gr</div>
	<img src="https://adweb.gr/site_assets/iab-memberseal-black-01.png"></img>	
	</Box>
	
);
};
export default Footer;
