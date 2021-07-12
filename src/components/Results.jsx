import React from 'react'


const Results = props => {
    
    const {box} = props

    const boxInfo = {
        "backgroundColor": `${box.color}`,
        "height":`${box.height}px`,
        "width":`${box.width}px`
    }
    
    return(
        <div style = {boxInfo}></div>
    )
}
export default Results