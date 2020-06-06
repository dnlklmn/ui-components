import * as React from 'react'

const icon = (props) => {
    return (
        <div
            style={{
                padding: "9px 0",
                position: "absolute",
                right: 0,
                color: '#333333',
                fontSize: 18,
            }}
            className="material-icons mdc-button__icon"
        >
           {props.icon}
        </div>
        
    )
}

export default icon;
