import brand_mobile from "./index.png";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
	const menu = [
		{
			id: 1,
			item: " HOME",
			link: "#HOME",
		},
		{
			id: 2,
			item: "ABOUT",
			link: "#ABOUT",
		},
		{
			id: 3,
			item: "SERVICES",
			link: "#SERVICES",
		},
		{
			id: 4,
			item: "SERVICES",
			link: "#SERVICES",
		},
		{
			id: 5,
			item: "PRICING",
			link: "#PRICING",
		},
		{
			id: 6,
			item: "CLIENTS",
			link: "#CLIENTS",
		},
		{
			id: 6,
			item: "BLOG",
			link: "#BLOG",
		},
		{
			id: 6,
			item: "CONTAC US",
			link: "#CONTAC_US",
		},
	];
	return (
		<div className="header">
			<div className="header_moblie_wrapper">
				<div className="header_mobile">
					<div className="brand_mobile">
						<a>
							<img src={brand_mobile} />
						</a>
					</div>
					<button>
						<MenuIcon />
					</button>
				</div>
				<div className="menu_mobile">
					{menu.map((item) => (
						<a key={item.id} href={item.link}>
							{item.item}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;
