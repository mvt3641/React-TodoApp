var React = require('react');
import {Link} from 'react-router';
var About = React.createClass({
  render: function(){
    return(
      <div>
      <Link to={"/"}>Todo</Link>
      <h2>Simple Task app built in React. Get to Work!!</h2>
      </div>
    );
  }
});

module.exports = About;
