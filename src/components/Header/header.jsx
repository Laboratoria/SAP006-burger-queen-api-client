// eslint-disable-next-line import/no-unresolved
import Logo from '../../img/logo-img.png';

function Header() {
  return (

    <header>
      <div className="logo-login">
        <img className="logo-img" src={Logo} alt="Logo The Krusty Krab" />
      </div>
      <div className="bubble-1 bubble-container anim bubble-animation-x">
        <div className="bubble bubble-animation-y" />
      </div>

      <div className="bubble-2 bubble-container anim bubble-animation-x">
        <div className="bubble bubble-animation-y" />
      </div>

      <div className="bubble-3 bubble-container anim bubble-animation-x">
        <div className="bubble bubble-animation-y" />
      </div>

      <div className="bubble-4 bubble-container anim bubble-animation-x">
        <div className="bubble bubble-animation-y" />
      </div>

      <div className="bubble-5 bubble-container anim bubble-animation-x">
        <div className="bubble bubble-animation-y" />
      </div>
    </header>

  );
}

export default Header;
