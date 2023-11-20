import React from 'react'
import { useCheckbox } from '../../Contexts/CheckboxContext';
import NewLogo from  '../../../images/NewLogo 1.png'

function InnerHeader() {

    const { checked, setChecked } = useCheckbox();

    const handleCheckboxChange = () => {
      if (checked) {
        setChecked(false);
      } else {
        setChecked(true);
      }
    };

  return (
    <div>
         <div className="NewLogo">
                <img src={NewLogo} alt=""></img>
                <div className="menu_btn">
                  <i className="fa-solid fa-bars"></i>
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    id="toggleCheckbox"
                    className="checking" >
                  </input>
                  <label for="toggleCheckbox">Menu</label>
                </div>
              </div>
    </div>
  )
}

export default InnerHeader