import { AiOutlineMail } from 'react-icons/ai'

export default function Nav() {
  return (
    <header className="header">
      <h1>John Lanni</h1>
      <nav>
        <a href="#about">About</a>
        <span> | </span>
        <a href="#projects">Projects</a>
        <span> | </span>
        <a className='nav-icon-container' href="mailto:johnlanni619@gmail.com"> <AiOutlineMail className='nav-icon' /> </a>
      </nav>
    </header>
  );
}
