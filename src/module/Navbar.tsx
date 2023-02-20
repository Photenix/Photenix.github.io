import Text from "../tools/Text";

function Navbar() {
    return ( 
      <nav className="navbar">
        <a href="#about"><Text tid="about"/></a>
        <a href="#skills"><Text tid="skills"/></a>
        <a href="#portfolio"><Text tid="portfolio"/></a>
      </nav>
    );
}

export default Navbar;