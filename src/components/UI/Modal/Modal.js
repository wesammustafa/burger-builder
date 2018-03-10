import React, {Component} from 'react';
import AUX from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || this.props.children !== nextProps.children
  }
  componentWillUpdate(){
    console.log('[Modal] WillUpdate');
  }
  render(){
    return <AUX>
        <Backdrop show={this.props.show} clicked={this.props.modalclosed} />
        <div className={classes.Modal} 
              style={{ transform: this.props.show ? "translateY(0)" : "translateY(-100vh)", opacity: this.props.show ? 1 : 0 }}>
          {this.props.children}
        </div>
      </AUX>;
  }
} 

export default Modal;