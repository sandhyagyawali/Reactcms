import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/createblog">Add Blogs</a></li>
            <li><a href="/editblog">Edit Blogs</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
