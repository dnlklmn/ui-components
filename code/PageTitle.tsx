import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import styled from "styled-components"
import { colors } from "./canvas"
import { StyledLabel, StyledH1, StyledTitle } from "./StyledElements"
import { B2BLogo } from "./B2BLogo"

const LeftContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: visible;    
    position: absolute;

    &:hover{
        cursor: pointer;
    }

`

const RightContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    right: 0;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    overflow: visible;    
    position: absolute;
`

export function PageTitle(props) {
    const icon = !props.case ? (
        <LeftContainer>
            <div
                style={{
                    width: 24,
                    float: "left",
                    height: 24,
                    color: colors.darkGrey,
                }}
                className="material-icons mdc-button__icon"
            >
                {props.icon}
            </div>

            <div
                style={{
                    paddingLeft: 18,
                }}
            >
                <StyledTitle style={{ fontSize: 18 }}>
                    {props.title}
                </StyledTitle>
            </div>
        </LeftContainer>
    ) : (
        <LeftContainer>
            <B2BLogo />
        </LeftContainer>
    )

    return (
        <div
            style={{
                display: "inline-block",
                position: "relative",
                width: "100%",
                height: 64,
                margin: "auto 0",
            }}
        >
            {icon}
        </div>
    )
}

PageTitle.defaultProps = {
    height: 64,
    width: 211,
    title: "Back",
    icon: "arrow_back",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(PageTitle, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "Back",
    },
    icon: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "arrow_back",
    },
    case: {
        title: "Home/Back",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Home",
        disabledTitle: "Back",
    },
})
