import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// @ts-ignore
import styled from "styled-components"
import { colors } from "./canvas"
import { StyledTitle } from "./StyledElements"

export function SectionTitle(props) {
    const { text, tint, ...rest } = props

    return <StyledTitle>{text}</StyledTitle>
}

SectionTitle.defaultProps = {
    height: 28,
    width: 240,
    text: "Section Title",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(SectionTitle, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Section Title",
    },
})
