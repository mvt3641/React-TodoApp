var React = require('react');
import {Link} from 'react-router';
var About = React.createClass({
  render: function(){
    return(
      <div>
      <Link to={"/"}>Todo</Link>
      <h2>All About me</h2>
      </div>
    );
  }
});

module.exports = About;
