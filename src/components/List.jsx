var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function() {
      var createItem = function(text, index) {
        // this.props-- these are what's passed over. One way data-binding
        // adding these to create a unique ID.
        return <ListItem key={index + text} text={text} />;
      };
      // map iterates through array, then calls function. For each item,
      //create an item. Items still needs to be created. In each is text and index.
      // 'this' grabs those list items, renders in DOM from line 9
        return(<ul>{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = List;
