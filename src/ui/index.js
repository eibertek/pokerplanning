import React from 'react';
import { render } from 'react-dom';
import Container from './components/container.js';
import InputComponent from './components/input.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }        
       
        return <div><Container name="Mariano">
            <InputComponent />
            <InputComponent />
            <InputComponent />
            <InputComponent />
            </Container></div>;
    }
} 

render(<App />, document.getElementById('react-app'));