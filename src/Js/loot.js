import React, { useState } from 'react';
import '../Css/loot.css';

const Loot = ({onClose,handleCheckboxChange}) => {

    const [isClosingLootForAnim, setClosingLootForAnim] = useState(false);
    const handleCloseLootAnim = () => {setClosingLootForAnim(true);};

    return (
        <div className={`Ref_Earn_Shop_Window ${isClosingLootForAnim ? 'closing' : ''}`}>
           <input id="checkbox_toggle" type="checkbox" class="check" onChange={handleCheckboxChange}/>
                <div class="checkbox">
                    <label class="slide" for="checkbox_toggle">
                    <label class="toggle" for="checkbox_toggle"></label>
                    <label class="text" for="checkbox_toggle" id="LootTxt">LOOT </label>
                    <label class="text" for="checkbox_toggle" id="CraftTxt">CRAFT</label>
                    </label>
                </div>
            
        <button id='CloseDebug' onClick={(event) => {onClose(event); handleCloseLootAnim(event); }}>X</button>
        </div>
    );
};

export default Loot;
