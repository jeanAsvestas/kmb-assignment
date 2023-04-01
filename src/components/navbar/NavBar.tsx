import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.scss';
// import { ErrorBoundary } from 'react-error-boundary';

export const NavBar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const navBarTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
      return;
    }
    handleShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navBarTransition);
    return () => window.removeEventListener('scroll', navBarTransition);
  }, []);

  return (
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <div className={`navBar ${show && 'navBar__black'}`}>
      <div className="navBar__contents">
        <button className="navBar__button-logo" onClick={() => navigate('/')}>
          <img
            className="navBar__logo"
            src="data:image/png;base64,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"
            alt="kmb logo"
          />
        </button>

        <button className="navBar__button-avatar" onClick={() => navigate('/')}>
          <img
            className="navBar__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar png"
          />
        </button>
      </div>
    </div>
    // </ErrorBoundary>
  );
};
