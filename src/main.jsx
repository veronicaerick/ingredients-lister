var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

// reuable list components
ReactDOM.render(<ListManager title="Ingredients" headingColor="#87CEEB"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do" headingColor="#38B0DE"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Xmas" headingColor="#00688B" />, document.getElementById('xmas'));
