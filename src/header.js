import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
   <nav>
      <NavLink exact to="dogs">Dogs</NavLink>
      <NavLink exact to="colors">Color Factory</NavLink>

    </nav>
  );
}

export default NavBar;
