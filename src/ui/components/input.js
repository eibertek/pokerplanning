import React from 'react';

export class InputComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                error:false,
            }
            this.onClick = this.onClick.bind(this);
        }

        componentDidUpdate() {
      //      throw new Error('ERROR GROSO');
        }
        onClick(){
            this.setState({error:true});
        }
        render() {
           return <span>
                <div onClick={this.onClick}>OJO QUE ESTA ROTO</div>
            </span>
        }
}

export default InputComponent;