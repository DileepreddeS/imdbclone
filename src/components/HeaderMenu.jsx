import { Menu, MenuItem } from "@mui/material";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import { routepath } from "../constants/route";
const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Link
        to={`${routepath.categories}?categories=popular`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link>
      <Link
        to={`${routepath.categories}?categories=toprated`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Toprated</MenuItem>
      </Link>
      <Link
        to={`${routepath.categories}?categories=upcoming`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
