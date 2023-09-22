import '../styles/Home.css';
import {NavBarHeaderMain, AboutTerminal} from '../ui-components';
import SaIcon from '../icons/sa-container.png';

function Home() {
  return (
    <div className="home-container">
      <NavBarHeaderMain></NavBarHeaderMain>
      <div className='icon-container'>
        <img src={SaIcon} alt="scroll down icon" />
      </div>
      <div className='about-container'>
        <AboutTerminal></AboutTerminal>
      </div>
      <div className='icon-container'>
        <img src={SaIcon} alt="scroll down icon" />
      </div>
    </div>
  );
}

export default Home;