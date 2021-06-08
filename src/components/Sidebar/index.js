import './Sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    }
    else {
      setX(-width);
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
          style={{
            transform: `translate(${width}px, 30px)`,
          }}
        >|||
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
