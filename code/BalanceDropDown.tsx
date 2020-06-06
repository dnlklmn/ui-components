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
const transition = { type: "tween", ease: [0.68, 0, 0.39, 1], duration: 0.23 }

const StyledButton = styled.div`
    border-radius: 5px;
    border: 1px solid ${colors.transparent};
    width: auto;
    display: flex; 
    justify-content: flex-end

    &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        cursor: pointer;
    }
    `

const StyledLabel = styled.div`
    width: auto;
    padding: 0px;
    font-size: 12px;
    font-family: Rubik;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${colors.lightGrey};
    text-transform: uppercase;

    `

const StyledBigText = styled.div`
    width: auto;
    padding: 0px;
    font-size: 18px;
    font-family: Lato;
    font-weight: 500;
    color: ${colors.darkGrey};
    `

const TextContainer = styled.div`
    width: auto;
    margin: 12px;
    display: inline-block;
    `

const StyledIconContainer = styled.div`
  margin: auto 12px;
  color: ${props => (props.color ? props.color : "red")};

  i {
    font-size: ${props => (props.stretch ? props.height : 24)}px !important;
  }
`

const StyledDropDown = styled.div`
    width: auto;
    position: relative;
    z-index: 999;
    background: white;
    margin: 6px 0 0 0;
    float: right;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    overflow: hidden;
`

const StyledDropDownItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 16px 0 16px 0;
    text-align: center;
    font-size: ${props =>
        props.dropDownFontSize ? props.dropDownFontSize : 16}px;
    font-family: Lato;
    font-weight: 500;
    color: ${colors.darkGrey};
    &:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }
`

export function BalanceDropDown(props) {
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

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    const num = Math.round(Number(props.balance) * 100) / 100

    const [clicked, setClicked] = useState(false)
    const dropDownAnim = useAnimation()

    return (
        <div ref={wrapperRef} style={{ height: 64 }}>
            <StyledButton
                onClick={function() {
                    if (!clicked) {
                        dropDownAnim.start({
                            height: props.items.length * 55,
                        })
                        setClicked(!clicked)
                    } else {
                        dropDownAnim.start({
                            height: 0,
                        })
                        setClicked(!clicked)
                    }
                }}
            >
                <TextContainer>
                    <StyledLabel>BALANCE</StyledLabel>
                    <StyledBigText>
                        {num.toLocaleString(navigator.language, {
                            minimumFractionDigits: 2,
                        })}
                        {"\u00a0"}
                        {props.currency}
                    </StyledBigText>
                </TextContainer>
                <TextContainer>
                    <StyledLabel>ACCOUNT</StyledLabel>
                    <StyledBigText>{props.account}</StyledBigText>
                </TextContainer>
                <StyledIconContainer
                    height={24}
                    stretch={true}
                    color={colors.darkGrey}
                >
                    <i className="material-icons mdc-button__icon">
                        {props.icon}
                    </i>
                </StyledIconContainer>
            </StyledButton>
            <StyledDropDown>
                <motion.div
                    animate={dropDownAnim}
                    transition={transition}
                    style={{ height: 0 }}
                >
                    {props.items.map(function(item, index) {
                        return (
                            <div key={index}>
                                <StyledDropDownItem key={index}>
                                    <div
                                        style={{
                                            float: "right",
                                            padding: "0 0 0 18px",
                                        }}
                                    >
                                        {item}
                                    </div>
                                    <StyledIconContainer
                                        height={20}
                                        stretch={true}
                                        color={colors.darkGrey}
                                        style={{ float: "right" }}
                                    >
                                        <i className="material-icons mdc-button__icon">
                                            {props.icons[index]}
                                        </i>
                                    </StyledIconContainer>
                                </StyledDropDownItem>
                            </div>
                        )
                    })}
                </motion.div>
            </StyledDropDown>
        </div>
    )
}

BalanceDropDown.defaultProps = {
    height: 64,
    width: 300,
    balance: "10000",
    account: "Company Inc.",
    iconSize: 18,
    icon: "keyboard_arrow_down",
    items: ["Account", "Contacts", "Logout"],
    icons: ["arrow_downward", "contacts", "logout"],
    dropDownFontSize: 16,
    currency: "EUR",
}

addPropertyControls(BalanceDropDown, {
    balance: {
        title: "Balance",
        type: ControlType.String,
        defaultValue: "10000",
    },
    currency: {
        title: "Currency",
        type: ControlType.String,
        defaultValue: "EUR",
    },
    account: {
        title: "Account",
        type: ControlType.String,
        defaultValue: "Company Inc.",
    },
    // icon: {
    //     title: "Icon",
    //     type: ControlType.String,
    //     defaultValue: "keyboard_arrow_down",
    // },
    items: {
        title: "List Items - Name",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
            defaultValue: "Item",
        },
    },
    icons: {
        title: "List Items - Icon",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
            defaultValue: "logout",
        },
    },
})
