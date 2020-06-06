import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { colors } from "./canvas"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useAnimation,
    motion,
} from "framer"
// @ts-ignore
import styled, { css } from "styled-components"
import {
    StyledLabel,
    StyledInput,
    StyledIconContainer,
    StyledDropDown,
    StyledDropDownItem,
    StyledTextField,
    StyledContainer,
} from "./StyledElements"

const transition = { type: "tween", ease: [0.68, 0, 0.39, 1], duration: 0.23 }

export function TextDropDown(props) {
    function useOutsideAlerter(ref) {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                dropDownAnim.start({
                    height: 0,
                })
                setClicked(false)
            }
        }
        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        })
    }

    function clickHandler() {
        if (!clicked) {
            dropDownAnim.start({
                height: props.items.length * 52,
            })
            setClicked(!clicked)
        } else {
            dropDownAnim.start({
                height: 0,
            })
            setClicked(!clicked)
        }
    }

    function clickItemHandler(e) {
        dropDownAnim.start({
            height: 0,
        })
        setClicked(!clicked)
        setSelectedItem(e)
    }

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    const num = Math.round(Number(props.balance) * 100) / 100

    const [clicked, setClicked] = useState(false)
    const [selectedItem, setSelectedItem] = useState(props.text)
    const dropDownAnim = useAnimation()

    const icon = (
        <i
            style={{
                color: colors.darkGrey,
                fontSize: 24,
                display: "inline-box",
                height: "100%",
                float: "right",
            }}
            className="material-icons mdc-button__icon"
        >
            {props.icon}
        </i>
    )
    return (
        <div ref={wrapperRef} style={{ height: 64, cursor: "pointer" }}>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledContainer
                onClick={clickHandler}
                color={props.color}
                style={{ height: "auto" }}
            >
                <StyledTextField
                    style={{
                        color: !props.selected
                            ? selectedItem == props.text
                                ? colors.lightGrey
                                : colors.darkGrey
                            : colors.darkGrey,
                    }}
                >
                    {props.selected ? props.selectedItemControl : selectedItem}
                    {icon}
                </StyledTextField>
            </StyledContainer>
            <div
                style={{
                    position: "absolute",
                    marginLeft: 0,
                    width: "100%",
                    marginBottom: 9,
                    height: clicked ? 2 : 1,
                    background: clicked ? colors.mainBlue : colors.lightGrey,
                }}
            />
            <StyledDropDown>
                <motion.div
                    animate={dropDownAnim}
                    transition={transition}
                    style={{ height: 0 }}
                >
                    {props.items.map(function(item, index) {
                        return (
                            <div key={index}>
                                <StyledDropDownItem
                                    key={index}
                                    onClick={() => clickItemHandler(item)}
                                >
                                    <div
                                        style={{
                                            padding: "0 18px",
                                        }}
                                    >
                                        {item}
                                    </div>
                                </StyledDropDownItem>
                            </div>
                        )
                    })}
                </motion.div>
            </StyledDropDown>
        </div>
    )
}

TextDropDown.defaultProps = {
    height: 57,
    width: 328,
    label: "Country",
    text: "Select Country",
    icon: "keyboard_arrow_down",
    items: ["United States", "Germany", "Mexico", "Nigeria"],
    dropDownFontSize: 16,
}

addPropertyControls(TextDropDown, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Country",
    },
    text: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "Select Country",
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
        enabledTitle: "Selected",
        disabledTitle: "Empty",
    },
    selectedItemControl: {
        hidden(props) {
            return props.selected === false
        },
        title: "Sel. Item",
        type: ControlType.String,
        defaultValue: "Selected Item",
    },
    items: {
        title: "List Items",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
            defaultValue: "item",
        },
    },
})
