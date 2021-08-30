import './styles.scss';
import React from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    setX(0);
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
        {/* <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        /> */}
        <button
          type="button"
          onClick={() => toggleMenu()}
          className="button_menu"
        >{(xPosition < 0) ? <FontAwesomeIcon icon={faBars} transform="down-2" size="lg" /> : <FontAwesomeIcon icon={faTimes} transform="down-2" size="lg" />}
        </button>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
