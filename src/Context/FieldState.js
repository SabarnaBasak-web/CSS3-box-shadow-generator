import React,{useState} from 'react'
import FieldContext from './FieldContext';


function FieldState(props) {
    
    const [horizontalValue, setHorizontalValue] = useState(0);
    const [verticalValue, setVerticalValue] = useState(0);
    const [blurValue, setBlurValue] = useState(0);
    const [spreadValue, setSpreadValue] = useState(0);
    const [color, setColor] = useState('');

    const changeHorizontalValueHandler = (newValue) => {
     setHorizontalValue(newValue);
    }
    const changeVerticalValueHandler = (newValue) =>{
        setVerticalValue(newValue);
    }
    const changeBlurValueHandler = (newValue) =>{
        setBlurValue(newValue);
    }
    const changeSpreadValueHandler = (newValue) =>{
        setSpreadValue(newValue);
    }

    return (
       <FieldContext.Provider value=
            {{horizontalValue:horizontalValue, 
              verticalValue:verticalValue, 
              blurValue:blurValue,
              spreadValue:spreadValue,
              color: color,
              setColor, 
              changeHorizontalValueHandler, 
              changeVerticalValueHandler,
              changeBlurValueHandler,
              changeSpreadValueHandler }}>
           {props.children}
       </FieldContext.Provider>
    )
}

export default FieldState
