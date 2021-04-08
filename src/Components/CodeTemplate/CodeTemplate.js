import React, { useContext, useState, createRef } from 'react';
import './CodeTemplate.css';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';
import FieldContext from '../../Context/FieldContext';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


function CodeTemplate() {

    const fieldContext = useContext(FieldContext);
    const btnRef = createRef(null);

    const [open, setOpen] = useState(false);
    
    // Close the tooltip handle
    const handleTooltipClose = () => {
        setOpen(false);
    };
    
    // Open the tooltip handle and copy the content to clipboard
    const handleTooltipOpen = () => {        
        setOpen(true);
        // Copy the content to clipboard
        const code = document.getElementById('code-content').textContent;        
        navigator.clipboard.writeText(code);
    };

    return (
        <div>
            <div className="button-container">
                <button className="btn">CSS </button>
                <button className="btn">Kotlin</button>
                <button className="btn">Swift</button>
                <button className="btn">React Native</button>
                <button className="btn">Dart</button>
            </div>
            <div className="code-container">
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="Copied"
                        >
                            <FileCopyIcon ref={btnRef} className="copy-icon" onClick={handleTooltipOpen}></FileCopyIcon>
                        </Tooltip>
                    </div>
                </ClickAwayListener>                
                <p id="code-content">
                    box-shadow: {`${fieldContext.horizontalValue}px ${fieldContext.verticalValue}px ${fieldContext.blurValue}px ${fieldContext.spreadValue}px ${fieldContext.color.rgba}`};<br></br>
                    -webkit-box-shadow: {`${fieldContext.horizontalValue}px ${fieldContext.verticalValue}px ${fieldContext.blurValue}px ${fieldContext.spreadValue}px ${fieldContext.color.rgba}`};<br></br>
                    -moz-box-shadow: {`${fieldContext.horizontalValue}px ${fieldContext.verticalValue}px ${fieldContext.blurValue}px ${fieldContext.spreadValue}px ${fieldContext.color.rgba}`};
                </p>
            </div>
        </div>
    )
}

export default CodeTemplate
