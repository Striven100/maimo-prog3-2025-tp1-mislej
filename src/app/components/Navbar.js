import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </div>
        <nav>
          <ul>
            <li><a href="#">Homes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="navbar-gif">
        <img src="/banner.gif" alt="Navbar Banner" />
      </div>
    </>
  );
};

export default Navbar;