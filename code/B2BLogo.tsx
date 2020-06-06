import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

const shadow = (
    <filter
        id="a"
        width="107.9%"
        height="151.4%"
        x="-4%"
        y="-25.8%"
        filterUnits="objectBoundingBox"
    >
        <feOffset dy="4" in="SourceAlpha" result="a1051z"></feOffset>
        <feGaussianBlur
            in="a1051z"
            result="a1052z"
            stdDeviation="2"
        ></feGaussianBlur>
        <feColorMatrix
            colorInterpolationFilters="sRGB"
            in="a1052z"
            result="a1053z"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        ></feColorMatrix>
    </filter>
)

export function B2BLogo(props) {
    let vBox = `0 0 ${211 / props.scale} ${48 / props.scale}`

    return (
        <svg
            viewBox={vBox}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="211"
            height="48"
            overflow="visible"
        >
            <defs>
                <path
                    id="b"
                    d="M204.656 48H6.344C2.841 48 0 45.135 0 41.6V6.4C0 2.866 2.841 0 6.344 0h198.312C208.16 0 211 2.866 211 6.4v35.2c0 3.535-2.84 6.4-6.344 6.4"
                ></path>
                {props.shadow ? shadow : ""}
            </defs>
            <g filter="url(#a)">
                <use
                    stroke="#000"
                    strokeOpacity="0"
                    strokeWidth="0"
                    clip-path="url(#a1040z)"
                    xlinkHref="#b"
                ></use>
            </g>
            <use
                fill="hsl(0, 0%, 100%)"
                clip-path="url(#a1040z)"
                xlinkHref="#b"
            ></use>
            <path
                fill="#232323"
                d="M204.653 48H150V0h54.653C208.158 0 211 2.866 211 6.4v35.2c0 3.535-2.842 6.4-6.347 6.4M76.117 26.257c0-1.608-.13-2.042-.544-2.628-.325-.456-1.02-.804-1.781-.804-.76 0-1.456.348-1.782.804-.413.586-.543 1.02-.543 2.607 0 1.607.13 2.041.543 2.628.326.456 1.022.803 1.782.803.761 0 1.456-.347 1.781-.803.414-.587.544-1.021.544-2.607zm-17.435 1.629v-.804H56.03c-1.303 0-1.911.521-1.911 1.326 0 .738.585 1.389 2.085 1.389 1.847 0 2.478-.195 2.478-1.911zm67.44 0v-.804h-2.65c-1.304 0-1.912.521-1.912 1.326 0 .738.586 1.389 2.086 1.389 1.847 0 2.476-.195 2.476-1.911zm-15.588-9.383v4.995h3.477c1.739 0 2.587-1.281 2.587-2.497 0-1.044-.414-1.673-1-2.064-.521-.347-1.001-.434-1.673-.434zm-2.347 13.25V16.286h5.607c1.216 0 2.282.153 3.477 1.088.935.716 1.673 2.019 1.673 3.691 0 2.195-1.673 4.65-4.846 4.65h-3.564v6.038zm25.262-.435l-3.954-10.578h2.346l2.607 7.711h.044l2.608-7.71h2.347l-4.738 13.292c-.608 1.695-1.759 2.173-3.106 2.173h-.741V34.12h.654c.564 0 1.107-.304 1.325-.956zm-7.327.435v-.978h-.043c-.455.761-1.217 1.108-2.717 1.108-2.454 0-3.889-1.455-3.889-3.367 0-1.759 1.218-3.258 3.586-3.258h3.063v-1.152c0-1.042-.672-1.411-2.259-1.411-1.152 0-1.694.217-2.086.847l-1.739-1.325c.848-1.173 2.065-1.607 3.716-1.607 2.716 0 4.586.912 4.586 3.628v7.515zm-23.286 0h2.218V20.741h-2.218zm0-13.25h2.218v-2.217h-2.218zM91.1 31.753V16.286h2.217v5.627h.042c.696-.869 1.695-1.303 2.869-1.303 1.717 0 3.672 1.325 3.672 3.822v7.321h-2.216v-6.56c0-1.499-.935-2.368-2.173-2.368-1.26 0-2.195.869-2.195 2.368v6.56zm-11.658-1.847l1.543-1.52c.957.934 1.999 1.411 3.477 1.411 1.26 0 2.172-.477 2.172-1.411 0-.783-.586-1.021-1.347-1.087l-1.955-.174c-1.826-.151-3.174-1.237-3.174-3.127 0-2.237 1.783-3.388 4.109-3.388 1.933 0 3.236.586 4.324 1.498l-1.369 1.607c-.87-.608-1.761-1.02-2.955-1.02-1.413 0-1.892.565-1.892 1.324 0 .479.348.957 1.456 1.044l1.826.13c2.282.152 3.195 1.542 3.195 3.301 0 2.151-2.001 3.389-4.565 3.389-1.781 0-3.432-.653-4.845-1.977zm-10.191-3.67c0-2.369.347-3.281 1.195-4.215.608-.672 1.629-1.411 3.346-1.411s2.737.739 3.347 1.411c.847.934 1.195 1.846 1.195 4.215 0 2.389-.348 3.301-1.195 4.235-.61.673-1.63 1.412-3.347 1.412s-2.738-.739-3.346-1.412c-.848-.934-1.195-1.846-1.195-4.235zm-5.355-5.496v-3.346h2.218v3.346h1.608v1.694h-1.608v6.408c0 .608.239.825.782.825h.826v2.086h-1.153c-1.543 0-2.673-.978-2.673-2.715v-6.603h-1.107v-1.694h1.107zm-5.214 11.013v-.978h-.043c-.457.761-1.218 1.108-2.717 1.108-2.456 0-3.889-1.455-3.889-3.367 0-1.759 1.216-3.258 3.585-3.258h3.064v-1.152c0-1.042-.674-1.411-2.26-1.411-1.151 0-1.695.217-2.086.847l-1.739-1.325c.847-1.173 2.064-1.607 3.717-1.607 2.716 0 4.585.912 4.585 3.628v7.515zm-19.41-1.999l1.542-1.758a7.144 7.144 0 004.39 1.541c1.912 0 3.064-.869 3.064-2.151 0-1.086-.63-1.911-2.021-2.085-.695-.087-1.24-.174-2.043-.282-2.672-.37-4.107-2.107-4.107-4.344 0-2.65 1.847-4.519 5.041-4.519 1.913 0 3.608.674 5.021 1.609l-1.305 1.932c-1.129-.717-2.455-1.194-3.824-1.194-1.434 0-2.586.738-2.586 2.215 0 .869.631 1.737 2.195 1.976.412.066 1 .152 1.738.239 2.891.348 4.238 2.347 4.238 4.453 0 2.846-2.109 4.497-5.433 4.497-2.281 0-4.281-.695-5.91-2.129zM23.558 18.311c3.185 0 5.753 2.618 5.753 5.865 0 3.246-2.568 5.864-5.753 5.864-3.184 0-5.752-2.618-5.752-5.864 0-3.247 2.568-5.865 5.752-5.865zm12.768 6.517c-.333 6.894-5.923 12.38-12.768 12.38-6.845 0-12.434-5.486-12.767-12.38h5.764c.325 3.646 3.344 6.516 7.003 6.516 3.66 0 6.678-2.87 7.004-6.516zM23.558 11.144c6.845 0 12.435 5.486 12.768 12.381h-5.764c-.326-3.647-3.344-6.517-7.004-6.517-3.659 0-6.678 2.87-7.003 6.517h-5.764c.333-6.895 5.922-12.381 12.767-12.381z"
            ></path>
            <path
                fill="#232323"
                d="M23.558 18.311c3.185 0 5.753 2.618 5.753 5.865 0 3.246-2.568 5.864-5.753 5.864-3.184 0-5.752-2.618-5.752-5.864 0-3.247 2.568-5.865 5.752-5.865zm12.768 6.517c-.333 6.894-5.923 12.38-12.768 12.38-6.845 0-12.434-5.486-12.767-12.38h5.764c.325 3.646 3.344 6.516 7.003 6.516 3.66 0 6.678-2.87 7.004-6.516zM23.558 11.144c6.845 0 12.435 5.486 12.768 12.381h-5.764c-.326-3.647-3.344-6.517-7.004-6.517-3.659 0-6.678 2.87-7.003 6.517h-5.764c.333-6.895 5.922-12.381 12.767-12.381z"
            ></path>
            <path
                fill="#FFF"
                d="M162.554 16.084h5.182c3.657 0 5.653 1.302 5.653 4.06 0 1.593-.807 2.693-2.041 3.298 1.593.583 2.535 1.75 2.535 3.679 0 2.4-1.571 4.442-5.653 4.442h-5.676V16.084zm3.141 8.772v4.06h2.266c1.884 0 2.781-.717 2.781-2.041 0-1.458-.964-2.019-3.073-2.019h-1.974zm0-6.125v3.477h2.086c1.727 0 2.468-.673 2.468-1.772 0-1.076-.539-1.704-2.805-1.704h-1.749zm19.629 10.185v2.647h-9.557v-2.019l5.182-6.102c.965-1.121 1.436-2.064 1.436-3.073 0-1.257-.92-1.884-1.929-1.884-1.055 0-1.84.65-1.93 1.884h-2.781c0-2.67 2.198-4.487 4.868-4.487 2.782 0 4.89 1.93 4.89 4.487 0 2.041-1.346 3.634-2.333 4.801l-3.185 3.746zm2.938-12.832h5.183c3.656 0 5.653 1.302 5.653 4.06 0 1.593-.808 2.693-2.042 3.298 1.593.583 2.535 1.75 2.535 3.679 0 2.4-1.57 4.442-5.653 4.442h-5.675V16.084zm3.141 8.772v4.06h2.266c1.884 0 2.782-.717 2.782-2.041 0-1.458-.965-2.019-3.074-2.019h-1.974zm0-6.125v3.477h2.086c1.728 0 2.468-.673 2.468-1.772 0-1.076-.538-1.704-2.804-1.704h-1.75z"
            ></path>
        </svg>
    )
}

B2BLogo.defaultProps = {
    height: 48,
    width: 211,
    overflow: "visible",
    scale: 1,
}

addPropertyControls(B2BLogo, {
    scale: {
        title: "Scale",
        type: ControlType.Number,
        defaultValue: 1,
        min: 0.1,
        max: 10,
        unit: "x",
        step: 0.1,
        displayStepper: true,
    },
    shadow: {
        title: "Shadow",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },

    click: { type: ControlType.EventHandler },
})