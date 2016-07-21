var React = require('react');
// defining object/class that will be instantiated later.
var ListItem = React.createClass({
    render: function() {
        return (
          // JSX- what will be rendered. Grab the data of each item.
            <li>
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

module.exports = ListItem;
