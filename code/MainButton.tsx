import * as React from "react"
import { Frame, addPropertyControls, ControlType, Color } from "framer"
import { colors } from "./canvas"
// @ts-ignore
import styled, { css } from "styled-components"
import {
    StyledBigButton,
    StyledBigButtonText,
    StyledIconContainer,
} from "./StyledElements"

export function MainButton(props) {
    const icon =
        props.icon.length > 0 ? (
            <i
                style={{ fontSize: 24 }}
                className="material-icons mdc-button__icon"
            >
                {props.icon}
            </i>
        ) : null

    const spacer =
        props.icon.length > 0 ? (
            <Frame position="relative" size={12} background="" />
        ) : null

    const Container = (props) => {
        return (
            <StyledIconContainer
                color={props.color}
                style={{ height: props.height }}
            >
                {icon}
                {spacer}
                <StyledBigButtonText>{props.text}</StyledBigButtonText>
            </StyledIconContainer>
        )
    }

    return (
        <div onClick={props.click}>
            {props.enabled ? (
                props.primary ? (
                    <StyledBigButton enabled primary>
                        <Container
                            color={props.color ? props.color : "white"}
                            height={64}
                            text={props.text}
                        />
                    </StyledBigButton>
                ) : (
                    <StyledBigButton enabled secondary>
                        <Container
                            color={colors.darkGrey}
                            height={64}
                            text={props.text}
                        />
                    </StyledBigButton>
                )
            ) : props.primary ? (
                <StyledBigButton disabled primary>
                    <Container
                        color={"rgba(255, 255, 255, 0.7)"}
                        height={64}
                        text={props.text}
                    />
                </StyledBigButton>
            ) : (
                <StyledBigButton disabled secondary>
                    <Container
                        color={colors.lightGrey}
                        height={64}
                        text={props.text}
                    />
                </StyledBigButton>
            )}
        </div>
    )
}

MainButton.defaultProps = {
    height: 64,
    width: "100%",
    text: "I'm a button!",
    icon: "send",
    iconSize: 24,
    enabled: true,
    primary: true,
}

addPropertyControls(MainButton, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "I'm a button!",
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
        defaultValue: "send",
    },
    primary: {
        title: "Type",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Primary",
        disabledTitle: "Secondary",
    },
    enabled: {
        title: "Enabled",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Enabled",
        disabledTitle: "Disabled",
    },
    click: { type: ControlType.EventHandler },
})
