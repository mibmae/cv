import './Sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleBandeau = () => {
    const bandeau = document.querySelector('.bandeau');
    const bordure = document.querySelector('.bordure');
    const chat = document.querySelector('.rcw-widget-container');

    if (bandeau.style.zIndex === '-1') {
      setTimeout(() => {
        bandeau.style.zIndex = 9999;
        if (chat !== null) {
        chat.style.zIndex = 9999;
        }
      }, 800);
    }
    else {
      console.log(xPosition);
      setTimeout(() => {
        bandeau.style.zIndex = -1;
        if (bordure != null) {
          bordure.style.zIndex = -2;
        }
      }, 50);
      console.log(chat);
      if (chat !== null) {
      setTimeout(() => {
        chat.style.zIndex = -1;
      }, 5);
    }
    }
  };

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      toggleBandeau();
    }
    else {
      setX(-width);
      toggleBandeau();
    }
  };

  React.useEffect(() => {
    setX(-300);
  }, []);

  return (
    <>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          type="button"
          onClick={() => toggleMenu()}
          className="button_menu"
        >{(xPosition < 0) ? <FontAwesomeIcon icon={faBars} transform="down-2" size="lg" /> : <FontAwesomeIcon icon={faTimes} transform="down-2" size="lg" />}
        </button>
        <div className="content" onClick={() => toggleMenu()}>{children}</div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Sidebar;
