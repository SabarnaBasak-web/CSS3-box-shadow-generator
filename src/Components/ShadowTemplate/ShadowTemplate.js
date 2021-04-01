import React,{useContext} from 'react';
import './ShadowTemplate.css';
import styled from 'styled-components';

import FieldContext from '../../Context/FieldContext';

const Box = styled.div`
    width: 200px;
    height: 200px;
    background: #3f51b5;
    border: 1px solid #3f51b5;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: ${props=>props.fieldContext.horizontalValue}px ${props=>props.fieldContext.verticalValue}px ${props=>props.fieldContext.blurValue}px ${props=>props.fieldContext.spreadValue}px ${props=>props.fieldContext.color.rgba}
    `
function ShadowTemplate() {
    const fieldContext = useContext(FieldContext);
    // console.log('Inside ShadowTemplate', fieldContext)
    
    return (
        <div className="box-container">
            {/* <div className="box" style={{ boxShadow: fieldContext.horizontalValue}}></div> */}
            <Box fieldContext={fieldContext}></Box>
        </div>
    )
}

export default ShadowTemplate
