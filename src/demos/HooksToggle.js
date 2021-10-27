import React, { useState } from "react";

function HooksToggle() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const menuOpen = () => {
    setOpenDropdown(true);
  };

  return (
    <div>
      <div className="searchinput">
        <input type="text" onFocus={menuOpen} className="form-control" />
      </div>
      <div className={openDropdown ? 'dropwdownwraper open' : 'dropwdownwraper'}>
        <p>Collapse panel</p>
      </div>
    </div>
  );
}
export default HooksToggle;
