import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Menu", "sub1", <MenuOutlined />, [
    getItem("Profile", "g1", null, [
      getItem(<Link to="/profile">Update</Link>, "1"),
    ], "group"),
  ]),
];

const NavMenu = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavMenu;
