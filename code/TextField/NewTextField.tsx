import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { StyledLabel, StyledInput, StyledTextField } from "../StyledElements"
import { CSSProperties } from "react"
import * as Styles from '../Styles'
import Icon from '../UI/Icon'

// Learn more: https://framer.com/api

const style:  CSSProperties = {
    width: "100%",
    height: 64,
}



export function NewTextField(props) {
    const [labelOn, setLabelOn] = React.useState(false)
    const [inFocus, setInFocus] = React.useState(false)

    let inputCheck

    let label = "\u00a0"
    if (labelOn) {
        label =  (
            <div style={Styles.labelStyle}>
                {props.label}
            </div>)
        }   

    return (
        <div style={style}>
            {label}
            <input style={Styles.inputStyle} 
                // autoComplete="off"
                defaultValue={!props.filled ? props.value : ""}
                placeholder={props.label}
                onFocus={() => {
                        setInFocus(true)
                        setLabelOn(true)
                    }}
                onBlur={() => {
                    if (inputCheck < 1) {
                        setLabelOn(false)
                    }
                        setInFocus(false)
                    }}
                // onChange={(event) => {
                //         inputCheck = event.target.value.length
                //     }}
            />
            <Icon icon="send" />
        </div>
    )
}

NewTextField.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(NewTextField, {
    label: {
        title: "Label/Placeholder",
        type: ControlType.String,
        defaultValue: "Something else",
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
        defaultValue: "send",
    },
    withIcon: {
        title: "With Icon",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "With",
        disabledTitle: "Without",
    },
})
