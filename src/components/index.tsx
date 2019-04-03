import React from 'react';
const logo = require('../lib/logo.svg');


export default class MyComponenent extends React.Component {
    public state: any
    constructor(props:any) {
        super(props);
    }
    public render() {
        return (
            <div className="App">
                <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/index.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                
                My Component!
                </a>
                </header>
            </div>
        );
    }
}