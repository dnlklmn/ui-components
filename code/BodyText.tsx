import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// @ts-ignore
import styled from "styled-components"
import { colors } from "./canvas"

const StyledBody = styled.div`
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.darkGrey}
`

export function BodyText(props) {
    const { text, tint, ...rest } = props

    return <StyledBody>{text}</StyledBody>
}

BodyText.defaultProps = {
    height: 58,
    width: 394,
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius in dolor ac euismod. Quisque lacus ligula, tristique eget nisl euismod, feugiat fringilla nisl.",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(BodyText, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius in dolor ac euismod. Quisque lacus ligula, tristique eget nisl euismod, feugiat fringilla nisl.",
    },
})
