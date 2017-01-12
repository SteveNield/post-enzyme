var Calculator = require('./incrementor.jsx'),
    enzyme = require('enzyme'),
    chai = require('chai'),
    React = require('react');

var expect = chai.expect;

describe('Calculator component', function(){
  var component;

  function renderComponent(){
    component = enzyme.shallow(<Calculator />);
  }

  it('exists', function(){
    expect(Calculator).to.exist;
  })

  it('renders', function(){
    renderComponent();
    expect(component).to.exist;
  })

  it('sets initial state to 0', function(){
    renderComponent();
    expect(component.state().count).to.equal(0);
  })

  it('sets increment to 1', function(){
    renderComponent();
    expect(component.state().increment).to.equal(1);
  })

  it('displays the count', function(){
    const count = 57;
    renderComponent();
    component.setState({
      count: count
    });
    expect(component.find('#count').text()).to.equal(count.toString());
  })

  describe('when the "increment" button is clicked', function(){
    function incrementCount(){
      component.find('#increment').simulate('click');
    }
    function setInitialCount(initialCount){
      component.setState({
        count: initialCount
      })
    }
    it('increments the count by 1', function(){
      renderComponent();
      setInitialCount(33);
      incrementCount();
      expect(component.state().count).to.equal(34);
    })
    it('displays the incremented count', function(){
      renderComponent();
      setInitialCount(45);
      incrementCount();
      expect(component.find('#count').text()).to.equal('46');
    })
  })
})
