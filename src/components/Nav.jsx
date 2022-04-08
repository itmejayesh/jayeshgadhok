import React from "react";
import "../components/nav.css";
import { IoIosHome } from "react-icons/io";
import { BiUser } from "react-icons/bi";

import { FaToolbox } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

function Nav() {
  const [activeNav, setAvtiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setAvtiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoIosHome />
      </a>

      <a
        href="#about"
        onClick={() => setAvtiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>

      <a
        href="#skills"
        onClick={() => setAvtiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaToolbox />
      </a>

      <a
        href="#contact"
        onClick={() => setAvtiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
