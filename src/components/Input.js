import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    // componentDidMount() {
    //     this.inputRef.current.focus();
    //     console.log(this.inputRef.current.value);
    // }

    focusInput = () => {
        this.inputRef.current.focus();
        // console.log(this.inputRef.current.value);
    };

    render() {
        return (
            <div>
                <h1>Ref Input</h1>
                <input type="text" ref={this.inputRef} />
                <br/>
                <button onClick={this.focusInput}>Focus</button>
            </div>
        );
    }
}

export default Input

