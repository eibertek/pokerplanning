import React from 'react';
import { render } from 'react-dom';
import Container from './components/container.js';
import AnimatedSpriteSheet from './components/Animations/AnimatedSpriteSheet.js';
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
        const content = [0].map(item =>             
        <Container name="Mariano">
            <AnimatedSpriteSheet
            filename={"public/img/goku_stand.png"}
            initialFrame={0}
            finalFrame={2}
            frame={{ width: 44, height: 90 }}
            bounds={{ x: 0, y: 0, width: 44, height: 90 }}
            isPlaying={true}
            loop={true}
            speed={300}
            />
        </Container> );
        return <div>{content}</div>;
    }
} 

render(<App />, document.getElementById('react-app'));