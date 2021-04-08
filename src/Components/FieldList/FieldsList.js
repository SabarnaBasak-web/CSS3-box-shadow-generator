import React, { useContext  } from 'react'
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputColor from 'react-input-color';

import './FieldList.css';
import FieldContext from '../../Context/FieldContext';

function FieldsList() {
    
    const fieldContext = useContext(FieldContext);
    // console.log(fieldContext);
    // useEffect(() => {
    //     console.log(fieldContext)
    // }, [fieldContext])
    
    // const [horizontalValue, setHorizontalValue] = useState(0);
    

    const changeHorizontalValueHandler = (event, newValue) => {               
        fieldContext.changeHorizontalValueHandler(newValue);
    }
    const changeVerticalValueHandler = (event, newValue) => {
        fieldContext.changeVerticalValueHandler(newValue);
        // console.log(verticalValue)                
    }
    const changeBlurValueHandler = (event, newValue) => {
        fieldContext.changeBlurValueHandler(newValue);
        // console.log(verticalValue)                
    }
    const changeSpreadValueHandler = (event, newValue) => {
        fieldContext.changeSpreadValueHandler(newValue);
        // console.log(verticalValue)                
    }


    return (
        
        <div className="options-container">                    
            {/* Horizontal Length */}
            <div className="option-cards">
                <Typography id="continuous-slider" className="slider-value-text" gutterBottom>
                    Horizontal Shadow Length: <span className="value-right">{fieldContext.horizontalValue}px</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Slider max={200} min={-200} value={fieldContext.horizontalValue} onChange={changeHorizontalValueHandler} aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
            {/* Vertical Length */}
            <div className="option-cards">
                <Typography id="continuous-slider" className="slider-value-text" gutterBottom>
                    Vertical Shadow Length:  <span className="value-right">{fieldContext.verticalValue}px</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Slider max={200} min={-200} value={fieldContext.verticalValue} onChange={changeVerticalValueHandler} aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
            {/* Blur Radius */}
            <div className="option-cards">
                <Typography id="continuous-slider" className="slider-value-text" gutterBottom>
                    Blur Radius:  <span className="value-right">{fieldContext.blurValue}px</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Slider value={fieldContext.blurValue} onChange={changeBlurValueHandler} aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
            {/* Spread Radius */}
            <div className="option-cards">
                <Typography id="continuous-slider" className="slider-value-text" gutterBottom>
                    Spread Radius:  <span className="value-right">{fieldContext.spreadValue}px</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Slider className="MuiSlider-root" max={200} min={-200} value={fieldContext.spreadValue} onChange={changeSpreadValueHandler} aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
            {/* Shadow Color */}
            <div className="option-cards">
                <Typography id="continuous-slider" gutterBottom>
                    Shadow Color:
                </Typography>
                <Grid container spacing={2}>
                    <div className="color-box">
                        <p>{fieldContext.color.rgba}</p>
                        <InputColor className="inputcolor" 
                            initialValue={'#212121'}
                            onChange={fieldContext.setColor}
                            placement="right"
                        />
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default FieldsList
