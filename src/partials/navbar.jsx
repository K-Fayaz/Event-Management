import "../CSS/navbar.css";

const Navbar = ()=>{
  return(
    <>
      <nav class="nav-container">
        <div class="main-logo">
          <h1 class="logo">KLE Logo</h1>
          <h1 id="hamburger-menu" class="hamburger-menu">&#9776;</h1>
        </div>
        <div class="nav-links-container">
          <ul id="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/all/events/">events</a></li>
            <li><a href="/login">login</a></li>
            <li><a href="/signup">register</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
};


export default Navbar;
