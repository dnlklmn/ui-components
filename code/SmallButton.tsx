import * as React from "react"
import { Frame, addPropertyControls, ControlType, Color } from "framer"
import { colors } from "./canvas"
// @ts-ignore
import styled, { css } from "styled-components"
import {
    StyledSmallButton,
    StyledSmallButtonText,
    StyledIconContainer,
} from "./StyledElements"

export function SmallButton(props) {
    const icon = (
        <i style={{ fontSize: 18 }} className="material-icons mdc-button__icon">
            {props.icon}
        </i>
    )

    const Container = props => {
        return (
            <StyledIconContainer
                color={props.color}
                style={{ height: props.height }}
            >
                {icon}
                <StyledSmallButtonText>{props.text}</StyledSmallButtonText>
            </StyledIconContainer>
        )
    }

    return (
        <div>
            {props.enabled ? (
                props.primary ? (
                    <StyledSmallButton enabled primary>
                        <Container
                            color={props.color ? props.color : "white"}
                            height={36}
                            text={props.text}
                        />
                    </StyledSmallButton>
                ) : (
                    <StyledSmallButton enabled secondary>
                        <Container
                            color={colors.darkGrey}
                            height={36}
                            text={props.text}
                        />
                    </StyledSmallButton>
                )
            ) : props.primary ? (
                <StyledSmallButton disabled primary>
                    <Container
                        color={"rgba(255, 255, 255, 0.7)"}
                        height={36}
                        text={props.text}
                    />
                </StyledSmallButton>
            ) : (
                <StyledSmallButton disabled secondary>
                    <Container
                        color={colors.lightGrey}
                        height={36}
                        text={props.text}
                    />
                </StyledSmallButton>
            )}
        </div>
    )
}

SmallButton.defaultProps = {
    height: 36,
    width: 105,
    text: "Small",
    icon: "send",
    iconSize: 18,
    enabled: true,
    primary: true,
}

addPropertyControls(SmallButton, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Small",
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
