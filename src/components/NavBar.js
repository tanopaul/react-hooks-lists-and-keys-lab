import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navBarAnchors = links.map(link => {
    return <a key={link} href={'#' + link}>{link}</a>
  })

  return <nav>{navBarAnchors}</nav>;
}

export default NavBar;
