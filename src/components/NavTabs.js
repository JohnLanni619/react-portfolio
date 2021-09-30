import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['About Me', 'Projects', 'Contact', 'Resume'];
  return (
    <header>
      <h1> 
        John Lanni
      </h1>
      <ul className="nav nav-tabs" id="nav-container">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link-active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      </header>
  );
}

export default NavTabs;