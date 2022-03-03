export default function NavTabs(props) {
  const tabs = ['About Me', 'Projects', 'Resume', 'Contact'];
  return (
    <header>
      <h1> John Lanni </h1>
      <ul className="nav nav-tabs" id="nav-container">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
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
  )
};