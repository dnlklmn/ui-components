import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// @ts-ignore
import styled from "styled-components"
import { colors } from "./canvas"
import { StyledLabel, StyledInput, StyledTextField } from "./StyledElements"

const Icon = (props) => {
    return (
        <div
            style={{
                padding: "9px 0",
                position: "absolute",
                right: 0,
                color: colors.darkGrey,
                fontSize: 18,
            }}
            className="material-icons mdc-button__icon"
        >
            {props.icon}
        </div>
    )
}

export function TextField(props) {
    const [inFocus, setInFocus] = React.useState(false)
    const [labelOn, setLabelOn] = React.useState(false)

    let inputCheck

    return (
        <div style={{ width: "100%", height: 64 }}>
            <StyledLabel>
                {labelOn || !props.filled ? props.label : null}
            </StyledLabel>
            <div>
                <StyledInput
                    autoComplete="off"
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
                    onChange={(event) => {
                        inputCheck = event.target.value.length
                    }}
                />
                <Icon icon={props.withIcon ? props.icon : ""} />
            </div>

            <div
                style={{
                    width: "100%",
                    height: inFocus ? 2 : 1,
                    background: inFocus ? colors.mainBlue : colors.lightGrey,
                }}
            />
        </div>
    )
}

TextField.defaultProps = {
    height: 55,
    width: 328,
    label: "Email",
    value: "my.name@email.com",
    filled: false,
    icon: "edit",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(TextField, {
    label: {
        title: "Label/Placeholder",
        type: ControlType.String,
        defaultValue: "Email",
    },
    value: {
        title: "Value",
        type: ControlType.String,
        defaultValue: "my.name@email.com",
    },

    withIcon: {
        title: "With Icon",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "With",
        disabledTitle: "Without",
    },
    icon: {
        hidden(props) {
            return props.withIcon === false
        },
        title: "Icon",
        type: ControlType.String,
        defaultValue: "edit",
    },
    filled: {
        title: "Filled",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Empty",
        disabledTitle: "Filled",
    },
})
