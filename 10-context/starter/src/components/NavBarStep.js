import React from "react";
import FormContext from "../context/FormContext";

class NavBarStep extends React.Component {
    static contextType = FormContext;

    isActive = () => (this.context.step === this.props.step ? true : false);

    updateStep = () => this.context.UpdateStep(this.props.step);

    render() {
        return (
            <button
                className={this.isActive() ? `active` : ``}
                disabled={this.context.step === `completed` ? true : false}
                onClick={this.updateStep}
            >
                {this.props.step}
            </button>
        );
    }
}

export default NavBarStep;
