var React = require('react');
var List = require('./List.jsx')
// when component loads, getInitialState is called
var ListManager = React.createClass({
  getInitialState: function() {
    // expecting array of items, start with empty array. when user submits new item
    return {items: [], newItemText:''};
  },
  // call setState to change data. only changing new item text. e for element. target/value.
  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    // user form onSubmit not click
    e.preventDefault();
    // components have props and state. this.props is READ ONLY.
    // this.state means mutable data, changable data.
    // this --> REACT handles this placement automatically
    var currentItems = this.state.items;
    // grab items in existing state, push newItemText to end of array
    //
    currentItems.push(this.state.newItemText);
    // setState is a function of a class, call when you want to change the state
    // change the items to be this new array, setState. explcitly set state
    // and update items. Want to clear box to let user enter new thing
    this.setState({items: currentItems, newItemText: ''});
  },
  // dont HARD CODE components, make this reusable.
  // create form.... calls handle submit above. Then on change, express changes.
  // value will be the ref to what we're saving and storing. this.state.newItemText will
  // be pushed to line 7.

  // summary- created a dynamic title, grabs current item and add new item on top.. updates items in state
  // clear the data so its empty. value of input box is cleared- value refers to data going
  // behind input box. need onChange to reflect data in box. value shows data connected
  // to input box. List is current items. {this.state.items} is updated on data change,
  // so everything is rerendered.
  render: function() {
    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    }
// background-color: #0000, but instead its dynamically passed
    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    }


    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
          <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
              </div>
                <div className="col-sm-2">
                  <button className="btn btn-primary">Add</button>
                </div>
            </form>

          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
});

module.exports = ListManager;
