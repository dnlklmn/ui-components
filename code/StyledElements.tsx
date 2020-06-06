import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// @ts-ignore
import styled, { css } from "styled-components"
import { colors } from "./canvas"

export const StyledTitle = styled.div`
    font-family: Rubik;
    font-size: 24px;
    font-weight: 500;
    color: ${colors.darkGrey}
`

export const StyledLabel = styled.div`
    width: 100%;
    padding: 0px;
    font-size: 12px;
    font-family: Rubik;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${colors.lightGrey};
    text-transform: uppercase;
    position: relative;
    `

export const StyledInput = styled("input")`
    type: text;
    width: 100%;
    height: auto;
    position: relative;
    font-family: Lato;
    margin: 0;
    font-size: 18px;
    padding: 9px 0;
    border: 0;
    background-color: rgba(0,0,0,0);
    color: ${colors.darkGrey};

    &:focus {
        outline: 0;
    }
`

export const StyledBigButton = styled.div`
    border: 0px;
    border-radius: 5px;
    width: 100%;
    padding: 0px;
    height: 64px;
    cursor: pointer;

    ${(props) =>
        props.primary &&
        css`
    background-color: ${colors.mainBlue};
    
    ${(props) =>
        props.enabled &&
        css`
    color: white;
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);

    &:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.15); 
        background-color: ${colors.hoverBlue};
        margin: -.5px 0 0 0;
        
    }
    &:active {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15); 
        background-color: ${colors.mainBlue};
        margin: 0px 0 0 0;
    }
  `}

  ${(props) =>
      props.disabled &&
      css`
    color: rgba(255,255,255,0.7);
    box-shadow: 0 0 0 rgba(0,0,0,0.15);
  `}

`}

${(props) =>
    props.secondary &&
    css`
    background-color: white;
    
    ${(props) =>
        props.enabled &&
        css`
    color: ${colors.darkGrey};
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);

    &:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.15); 
        background-color: #fafafa;
        margin: -.5px 0 0 0;
    }
    &:active {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15); 
        background-color: white;
        margin: 0px 0 0 0;
    }
  `}

  ${(props) =>
      props.disabled &&
      css`
    color: rgba(255,255,255,0.7);
    box-shadow: 0 0 0 rgba(0,0,0,0.15);
    border: 1px solid ${colors.lightGrey};
  `}

`}
`

export const StyledBigButtonText = styled.h2`
    font-family: Rubik;
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
`

export const StyledSmallButton = styled.div`
    border: 0px;
    border-radius: 5px;
    width: 100%;
    padding: 0px;
    height: 36px;
    cursor: pointer;

    ${(props) =>
        props.primary &&
        css`
    background-color: ${colors.mainBlue};
    
    ${(props) =>
        props.enabled &&
        css`
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);

    &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15); 
        background-color: ${colors.hoverBlue};
        margin: -.5px 0 0 0;
        
    }
    &:active {
        box-shadow: 0 2px 4px rgba(0,0,0,0.15); 
        background-color: ${colors.mainBlue};
        margin: 0px 0 0 0;
    }
  `}

  ${(props) =>
      props.disabled &&
      css`
    color: rgba(255,255,255,0.7);
    box-shadow: 0 0 0 rgba(0,0,0,0.15);
  `}

`}

${(props) =>
    props.secondary &&
    css`
    background-color: white;
    
    ${(props) =>
        props.enabled &&
        css`
    color: ${colors.darkGrey};
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);

    &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15); 
        background-color: #fafafa;
        margin: -.5px 0 0 0;
    }
    &:active {
        box-shadow: 0 2px 4px rgba(0,0,0,0.15); 
        background-color: white;
        margin: 0px 0 0 0;
    }
  `}

  ${(props) =>
      props.disabled &&
      css`
    color: rgba(255,255,255,0.7);
    box-shadow: 0 0 0 rgba(0,0,0,0.15);
    border: 1px solid ${colors.lightGrey};
  `}

`}
`

export const StyledSmallButtonText = styled.h2`
    font-family: Rubik;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 12px 0px 12px 8px;
    letter-spacing: 1px;
`

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : "red")};
`

export const StyledDropDown = styled.div`
    width: 100%;
    position: relative;
    z-index: 999;
    background: white;
    margin: 6px 0 0 0;
    float: right;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    overflow: hidden;
    cursor: pointer;
`

export const StyledDropDownItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 16px 0 16px 0;
    text-align: center;
    font-size: ${(props) =>
        props.dropDownFontSize ? props.dropDownFontSize : 16}px;
    font-family: Lato;
    font-weight: 500;
    color: ${colors.darkGrey};
    &:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }
`

export const StyledTextField = styled.div`
    width: 100%;
    position: "absolute";
    font-family: Lato;
    margin: 0;
    font-size: 18px;
    padding: 9px 0;
    border: 0;
    background-color: rgba(0,0,0,0);

    &:focus {
        outline: 0;
    }
`

export const StyledContainer = styled.div`
  display: inline-box;
  height: 64px;
  width: 100%;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.color ? props.color : "red")};
`

export const DropdownWrapper = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;

     &:hover {
        background-color: white;
        cursor: pointer;
    }
   

`

export const StyledH2 = styled.h2`
    font-family: Lato;
    color: ${colors.darkGrey};
    letter-spacing: 0.5px;
    font-weight: 400;
    margin: 0;
    line-height: 1;
    font-size: 18px;
    width: 150px;
    
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    

    ${(props) =>
        props.bold &&
        css`
        font-weight: 600;`}

    ${(props) =>
        props.right &&
        css`
        text-align: right;`}
        
    @media (max-width: 768px) {
        font-size: 14px;
        width: 130px;
  }
`

export const StyledH1 = styled.h2`
    font-family: Rubik;
    color: ${colors.darkGrey};
    letter-spacing: 0.5px;
    font-weight: 500;
    margin: 0;
    line-height: 1;
    font-size: 24px;
    width: 150px;
    
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    

    ${(props) =>
        props.bold &&
        css`
        font-weight: 600;`}

    ${(props) =>
        props.right &&
        css`
        text-align: right;`}
        
    @media (max-width: 768px) {
        font-size: 14px;
        width: 130px;
  }
`
