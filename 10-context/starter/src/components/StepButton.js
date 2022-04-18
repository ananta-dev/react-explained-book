import React from "react";
import FormContext from "../context/FormContext";

class StepButton extends React.Component {
    static contextType = FormContext;

    handleOnClick = () => {
        this.context.updateStep(this.context.step);
    };

    render() {
        return (
            <input
                className='step-button'
                type='submit'
                value={this.props.label || `Next`}
                onClick={this.handleOnClick}
            />
        );
    }
}
export default StepButton;
