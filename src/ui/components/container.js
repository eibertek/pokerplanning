import React, { Component } from 'react';
const currentTime = OriginalComponent => class extends Component {
    constructor(props){
        super(props);
        this.state = {time: ''};
    }
    componentDidMount() {
        this._interval = setInterval(() => this.setState({time: this.getTime()}), 50);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    getTime(){
        let t = new Date();
        return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
    }
    render() {
        let {...rest} = this.props;
        return (
            <OriginalComponent {...rest} time={this.state.time} />
        )
    }
}

export class Container extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                error:false,
            }
            this.onClick = this.onClick.bind(this);
        }

        componentDidUpdate() {
        //    throw new Error('ERROR GROSO');
        }
        onClick(){
            this.setState({error:true});
        }
        render() {
           return <div>
               {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                    name: 'man'
                    })
                })}
            </div>
        }
}

export default currentTime(Container);