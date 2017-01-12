var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      increment: 1
    };
  },
  increment: function(){
    this.setState({
      count: this.state.count+=this.state.increment
    })
  },
  render: function(){
    return (<div>
              <button id="increment" onClick={this.increment} />
              <div id="count">{ this.state.count }</div>
            </div>);
  }
})
