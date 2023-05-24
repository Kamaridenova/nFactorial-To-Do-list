import React, { useState } from 'react';

function CheckBox() {
   const [checked, setChecked] = useState(true);

   function changeCheckbox() {
      setChecked(!checked);
   }

   return <div>
      <input type="checkbox" style={{display: "flex", justifyContent: "flex-start", paddingLeft: "10px"}} checked={checked} onChange={changeCheckbox} />

   </div>;
}

export default CheckBox;