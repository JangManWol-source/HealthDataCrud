import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import {motion} from 'framer-motion'
const NavBar = () => {
  const [click, setClick] = useState(false);
  const menuOnClick = () => {
    setClick(true);
  };
  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav_text">
          <Link to={"/"}>Health Data Form</Link>
        </div>
        <div className="nav_icon">
          <MenuRoundedIcon onClick={menuOnClick} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {click && (
          <motion.div initial={{x:'-100ch', opacity:0}} animate={{x:0, opacity:1}} className="option">
            <div className="close">
              <div className="icon">
                <CloseIcon
                  onClick={() => {
                    setClick(false);
                  }}
                  fontSize="small"
                />
              </div>
            </div>
            <div className="menus">
              <Link
                to={"/"}
                onClick={() => {
                  setClick(false);
                }}
              >
                Home
              </Link>
              <Link
                to={"/add"}
                onClick={() => {
                  setClick(false);
                }}
              >
                Add New Data
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </React.Fragment>
  );
};

export default NavBar;
