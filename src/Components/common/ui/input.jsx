import React from "react";

const Input = (props) => {
    const get_classess = () => {
        let classes =
            "bg-white px-4 " +
            "appearance-none transition duration-300 " +
            "ease-in-out focus: outline-none " +
            "focus:ring-0 border mb-2 " +
            "border-border-base rounded-md focus:border-green-500 h-12";

        classes += props.input.is_valid ? "" : " border-red-500";

        return classes;
    };

    const label_classes = () => {
        let classes = "mb-2";
        classes += props.dark_mode ? " text-white" : "";
        return classes;
    };

    return (
        <div className="w-full flex flex-col mb-1">
            <label className={label_classes()}>{props.input.text}</label>
            <input
                type={props.input.type}
                name={props.input.key}
                className={get_classess()}
                onBlur={props.input.validate_input}
                placeholder={props.input.placeholder}
                value={props.input.value}
                readOnly={props.input.read_only}
                onChange={(event) => props.handle_change(event, props.input)}
            ></input>
            <p
                className={
                    props.input.is_valid ? "hidden" : "text-red-500 block"
                }
            >
                {props.input.error}
            </p>
        </div>
    );
};

export default Input;
