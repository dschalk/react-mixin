import React from 'react';
let reactMixin = require('react-mixin');
import { Map } from 'immutable';
export {Component_1};

let count = 0;

class Component_1 extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          data: Map({
                       foo: 'bar',
                       value: 0,
                       renderCount: 0,
                       value2: '',
                       count2: 0,
                       name
                   }),
          message: ''
        };
  }

  setImmState = (fn) => {
    return this.setState(({data}) => ({
      data: fn(data)
    }));
  }

  handleListen = () => {
    let message = this.state.message;
    console.log("*** Sent by React 'node_modules/react/lib/EventListener.js ' *** Change in document.getElementById('alpha') ");
    this.setImmState(d => d.update('value2', x => 'EventEmitter.listen success. state.message: ' + message )); 
  }

  componentDidMount = () => {
    this.setTimeout(() => {this.setImmState(d => d.update('foo', x => 'baz'))}, 4000);
    let handle = React.findDOMNode(this);
    console.log(handle);
  }



    addAddListener = () => {
      let addCounter = document.getElementById('addCounter');
    }

    addMinusListener = () => {
      let minusCounter = document.getElementById('minusCounter');
    }

  add = () => {  this.setImmState(d => d.update('count2', v => v + 1)) };
  minus = () => {  this.setImmState(d => d.update('count2', v => v - 1)) };

  handleIncrementClick = () => {  this.setImmState(d => d.update('value', v => v + 1)) };

  handleNoChangeClick = () => { this.setImmState(d => d.update('value', v => v)) }; // 'render()' does not get called.

  handleClickMessage = () => { 
    let message = this.state.message;
    this.setImmState(d => d.update('name', x => message)); 
  };

  handleEnterMessage = (e) => {
    let message = this.state.message;
    if( e.keyCode == 13 ) {
       this.setImmState(d => d.update('name', x => message));
    }
  };

    render = () => {
      let data = this.state.data;
      count = count += 1;
      let foo = data.get('foo');
      let value = data.get('value');
      let value2 = data.get('value2');
      let name = data.get('name');
      let count2 = data.get('count2');
      let message = this.state.message;
      let add = this.add;
      let subtract = this.subtract;
      console.log('render() again. count = ' + count);
        return (
          <div>
            <div>{foo}</div>
            <div>{message}</div>
            <div>
              <div>Value: {value}</div>
              <div>render() has been called {count} times (see console log).</div>
              <button onClick={this.handleIncrementClick}>Count Up Event</button>
              <button onClick={this.handleNoChangeClick}>Set Same Value Event</button>
            </div>
            <input id='alpha' autoFocus type="text" valueLink={this.linkState('message')} onKeyDown={this.handleEnterMessage} />
            <button onClick={this.handleClickMessage} > Enter name. </button>
            Name: {name}
          </div>
        )
    }
}

reactMixin(Component_1.prototype, require('./set-timeout-mixin'));
reactMixin(Component_1.prototype, require('./node_modules/react/lib/ReactComponentWithPureRenderMixin'));
reactMixin(Component_1.prototype, require('./node_modules/react/lib/LinkedStateMixin'));
reactMixin(Component_1.prototype, require('./node_modules/react/lib/AutoFocusMixin'));

React.render(<Component_1 />, document.getElementById('divSix'));


