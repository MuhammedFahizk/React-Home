import React from 'react';

interface Props {
    items: string[];
}

const NavBarItems: React.FC<Props> = ({ items }) => {
  return (
    <ul className="navbar-nav ms-auto ">
      {items.map((item, index) => (
        <li className="nav-item" key={index}>
          <a className="nav-link mx-4 " aria-current="page" href="">{item}</a>
        </li>
      ))}
    </ul>
    
  );
}

export default NavBarItems;
