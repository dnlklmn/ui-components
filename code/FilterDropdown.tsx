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
    DropdownWrapper,
} from "./StyledElements"

const transition = { type: "tween", ease: [0.68, 0, 0.39, 1], duration: 0.23 }

export function FilterDropdown(props) {
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
                height: props.items.length * 37,
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
    const [selectedItem, setSelectedItem] = useState(props.items[0])
    const dropDownAnim = useAnimation()

    const icon = (
        <i
            style={{
                color: colors.darkGrey,
                fontSize: 18,
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
        <div ref={wrapperRef}>
            <DropdownWrapper>
                <StyledContainer
                    onClick={clickHandler}
                    color={props.color}
                    style={{ height: "auto" }}
                >
                    <StyledTextField
                        style={{
                            fontSize: 14,
                            padding: 8,
                            // padding: "12px",
                            color: colors.darkGrey,
                        }}
                    >
                        {selectedItem}
                        {icon}
                    </StyledTextField>
                </StyledContainer>
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
                                        style={{ padding: "10px 0 10px 0" }}
                                        key={index}
                                        onClick={() => clickItemHandler(item)}
                                    >
                                        <div
                                            style={{
                                                padding: "0 9px",
                                                fontSize: 14,
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
            </DropdownWrapper>
        </div>
    )
}

FilterDropdown.defaultProps = {
    height: 36,
    width: 116,
    label: "Items",
    text: "Select Items",
    icon: "keyboard_arrow_down",
    items: ["Latest", "Oldest", "Alphabetic"],
    dropDownFontSize: 14,
}

addPropertyControls(FilterDropdown, {
    items: {
        title: "List Items",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
            defaultValue: "item",
        },
    },
})
