import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
        // console.log(this.inputRef.current.value);
    };

    render() {
        return (
            <div>
                <h1>Forward Ref Component</h1>
                <FRInput ref={this.inputRef} />
                <br />
                <button onClick={this.focusInput}>Focus</button>
            </div>
        );
    }
}

export default FRParentInput
