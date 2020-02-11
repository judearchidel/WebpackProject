import React , {Component} from 'react';
import { NamedModulesPlugin } from 'webpack';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state= {
            component= null;
        }
        componentDidMount(){
            importComponent()
                .then(cmp =>{
                    this.setState({
                        component: cmp.defult
                    })
                })
        }
        render(){
            const C = this.state.component;
            return(  C ? <C {...props} />: null );
        }
    }
}

export default asyncComponent;