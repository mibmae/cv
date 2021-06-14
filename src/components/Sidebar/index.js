import './Sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleBandeau = () => {
    const bandeau = document.querySelector('.bandeau');
    const bordure = document.querySelector('.bordure');

    if (bandeau.style.zIndex === '-1') {
      setTimeout(() => {
        bandeau.style.zIndex = 9999;
      }, 800);
    }
    else {
      console.log(xPosition);
      setTimeout(() => {
        bandeau.style.zIndex = -1;
        bordure.style.zIndex = -2;
      }, 50);
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
        >{(xPosition < 0) ? '|||' : 'X'}
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
