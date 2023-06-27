import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = (keyword, title) => {
    props.handlePress(true, keyword, title);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSidebarData = SidebarData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' id='style-7'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <span id='myId'>Discover our awesome formats</span>
        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'} id='style-7'>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
              <span id='myId'>Choose your format</span>
              <li className='search-bar'>
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </li>
            </li>
            {filteredSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <div onClick={() => handleClick(item.id, item.title)}>
                    {item.icon}
                    <span>{item.title}</span>
                    {item.infoIcon}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
