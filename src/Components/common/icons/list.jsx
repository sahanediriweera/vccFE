import React, { Component } from "react";

export default class ListIcon extends Component {
    render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={this.props.stroke_color || "currentColor"}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
            </svg>
        );
    }
}
