import { useState } from "react";

function Dropdown ({Selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['View', 'Edit', 'Update', 'Archive', 'Duplicate', 'Delete'];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => 
            setIsActive(!isActive)}> 
            Click to select
            <span className="fas fa-caret-down"> </span>
            </div>

            { isActive && (
            <div className="dropdown-content">
            {options.map((option) => (
               
                <div onClick={(e) => {
                     setSelected(option);
                    setIsActive(false);

                 }}

                 className="dropdown-item">
                 {option}
                 </div>  
            
            ))}
                
            
        </div>
        
    )}
    </div>
    );
}



export default Dropdown;