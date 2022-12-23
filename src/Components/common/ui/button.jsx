import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <button
                onClick={(event) => this.props.handle_click(event)}
                className="w-full border-2 border-[#cccccc]
                            px-12 py-2 font-semibold bg-transparent_bg
                           hover:text-primary hover:border-primary
                          cursor-pointer rounded-md mb-4
                          "
            >
                {this.props.text}
            </button>
        );
    }
}
