import React, { Component } from "react";

export default class MessageIcon extends Component {
    get_counter_classes() {
        let classess =
            "absolute -mt-7 ml-4 rounded-full bg-emerald-700 w-4 h-4 p-0 m-0 text-white font-mono text-sm  leading-tight text-center";
        classess += this.props.product_count == 0 ? " hidden" : " block";
        return classess;
    }

    render() {
        return (
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                </svg>
                <span className={this.get_counter_classes()}>
                    {this.props.product_count}
                </span>
            </div>
        );
    }
}
