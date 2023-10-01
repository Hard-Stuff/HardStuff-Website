import { React, useState, useEffect } from "react";

/**
 *
 * @param value The default text within the button
 * @param alternateValue The alternate text displayed when the button has been pressed
 * @param onClick The default on-click behaviour
 * @param alternateOnClick The alternate on-click behavious when the button has been pressed
 * @param isAlternate You can handle the default/alternate state with your own state handler
 * @param title The title to describe what this button does
 * @param className The title to describe what this button does
 * @param alternateClassName The title to describe what this button does
 */

export const IconnedButton = (props) => {
    const { image_src, content, alignment, onClick, style } = props;
    const [bodyBackground, setBodyBackground] = useState();

    useEffect(() => {
        setBodyBackground(getComputedStyle(document.body).backgroundColor);
    }, []);

    const imgStyle = {
        backgroundColor: bodyBackground,
    };

    return (
        <div
            className="iconned_button"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                borderRadius: alignment !== "right" ? "0 30px 30px 0" : "30px 0 0 30px",
                ...style,
            }}
        >
            {alignment !== "right" && <img src={image_src} className="iconned_button_img" alt="" style={imgStyle} />}
            <span
                style={{
                    flexGrow: 1, // allows the text container to grow and fill the remaining space
                    height: "100%",
                    color: bodyBackground,
                    padding: "0 10px 0 10px",
                    textAlign: alignment !== "right" ? "left" : "right",
                }}
            >
                {content}
            </span>
            {alignment === "right" && <img src={image_src} className="iconned_button_img" alt="" style={imgStyle} />}
        </div>
    );
};

export const EmailUsButton = (props) => {
    const handleLetsChatClick = () => {
        const subject = "I've just seen your website, and...";
        const emailLink = `mailto:matt@hard-stuff.com?subject=${encodeURIComponent(subject)}`;
        window.open(emailLink, "_blank");
    };
    return (
        <button
            className="hollowed"
            onClick={handleLetsChatClick}
            style={{ padding: ".5em", border: "none", ...props.style }}
        >
            <span className="hardstuffnocolor">Email Us</span>
        </button>
    );
};
