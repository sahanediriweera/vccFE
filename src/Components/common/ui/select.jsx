import React, { Component } from "react";

export default class Select extends Component {
    get_classess() {
        let classes =
            "px-4 " +
            "appearance-none transition duration-300 " +
            "ease-in-out focus: outline-none " +
            "focus:ring-0 border mb-2 " +
            "border-border-base rounded-md focus:border-green-500 h-12";

        classes += this.props.input.is_valid ? "" : " border-red-500";
        classes += this.props.dark_mode ? " bg-black text-white" : " bg-white";

        return classes;
    }
    render() {
        return (
            <div className="w-full flex flex-col mb-1">
                <label className="mb-2">{this.props.input.text}</label>

                <select
                    className={this.get_classess()}
                    onChange={(event) =>
                        this.props.handle_selection(event, this.props.input)
                    }
                >
                    {this.props.input.list_items.map((item) => (
                        <option
                            selected={item.id == this.props.input.value}
                            key={item.id}
                            value={item.id}
                        >
                            {item.title}
                        </option>
                    ))}
                </select>

                <p
                    className={
                        this.props.is_valid == true
                            ? "hidden"
                            : "text-red-500 block"
                    }
                >
                    {this.props.input.error}
                </p>
            </div>
        );
    }
}
