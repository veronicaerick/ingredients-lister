var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

// reuable list components

ReactDOM.render(<ListManager title="Shopping List" headingColor="#87CEEB"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do" headingColor="#38B0DE"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Email/Follow-up's" headingColor="#00688B" />, document.getElementById('xmas'));
