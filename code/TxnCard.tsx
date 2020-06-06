import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
//@ts-ignore
import styled from "styled-components"
import { colors } from "./canvas"
import { StyledLabel, StyledH2 } from "./StyledElements"

const LeftContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: visible;    
    position: absolute;

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

const Icon = props => {
    return (
        <div
            style={{
                width: 24,
                float: "left",
                height: 24,
                color:
                    props.case === "Failed"
                        ? colors.lightGrey
                        : colors.darkGrey,
            }}
            className="material-icons mdc-button__icon"
        >
            {props.case === "Successful" ? "arrow_upward" : null}
            {props.case === "Sending" ? "query_builder" : null}
            {props.case === "Failed" ? "block" : null}
            {props.case === "Incoming" ? "arrow_downward" : null}
        </div>
    )
}

const Icon2 = props => {
    return (
        <div
            style={{
                width: 24,
                float: "left",
                height: 24,
                cursor: "pointer",
                color:
                    props.case === "Sending"
                        ? colors.lightGrey
                        : colors.darkerBlue,
            }}
            className="material-icons mdc-button__icon"
        >
            {props.case === "Successful" ? "cloud_download" : null}
            {props.case === "Sending" ? "cloud_download" : null}
            {props.case === "Failed" ? "refresh" : null}
            {props.case === "Incoming" ? null : null}
        </div>
    )
}

export function TxnCard(props) {
    return (
        <div
            style={{
                display: "inline-block",
                position: "relative",
                width: "100%",
                height: 64,
                margin: "auto 0",
                // justifyItems: "center",
            }}
        >
            <LeftContainer>
                <Icon case={props.case} />
                <div
                    style={{
                        paddingLeft: 18,
                    }}
                >
                    <StyledH2>{props.recipient}</StyledH2>
                    <StyledLabel
                        style={{
                            textTransform: "none",
                            lineHeight: 1.5,
                            letterSpacing: 0,
                        }}
                    >
                        {props.time} • {props.case}
                    </StyledLabel>
                </div>
            </LeftContainer>
            <RightContainer>
                <StyledH2
                    right
                    style={{
                        paddingRight: 18,
                    }}
                >
                    4.50 EUR
                </StyledH2>
                <StyledH2
                    bold
                    right
                    style={{
                        paddingRight: 18,
                    }}
                >
                    1,000.00 EUR
                </StyledH2>
                <Icon2 case={props.case} />
            </RightContainer>
        </div>
    )
}

TxnCard.defaultProps = {
    height: 64,
    width: 690,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(TxnCard, {
    recipient: {
        title: "Recipient/Sender",
        type: ControlType.String,
        defaultValue: "John Appleseed",
    },
    time: {
        title: "When?",
        type: ControlType.Enum,
        defaultValue: "0",
        options: [
            "Just now",
            "5 min ago",
            "An hour ago",
            "2 hrs ago",
            "3 hrs ago",
            "Earlier today",
            "Yesterday",
            "Earlier this week",
            "Last week",
            "Earlier this month",
            "Last month",
            "Earlier this year",
            "Last year",
        ],
    },
    case: {
        title: "Text",
        type: ControlType.Enum,
        defaultValue: "0",
        options: ["Successful", "Sending", "Failed", "Incoming"],
    },
})
