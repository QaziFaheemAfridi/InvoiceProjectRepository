import React, { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>Check me</label>
    </div>
  );
}

export default Checkbox;