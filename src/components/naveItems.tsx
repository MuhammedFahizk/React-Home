import React from 'react';
import { FaUserCircle } from "react-icons/fa";

interface Props {
    items: string[];
    section: number
}

const NavBarItems: React.FC<Props> = ({ items, section }) => {
  return (
    <ul className="navbar-nav ms-auto ">
      {items.map((item, index) => (
        <li className="nav-item" key={index}>
        <a className="nav-link mx-4 text-white" aria-current="page" href="">{item}</a>
        {index === section && <hr style={{ borderTop: '2px solid ',  width: '60px' }} className="dropdown-divider text-success ms-4 " />}
      </li>
      ))}
      <li className='mt-1'><FaUserCircle color='white'/>
</li>
    </ul>

  );
}

export default NavBarItems;
