var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
import{Router,Route, browserHistory, Link} from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./additem');
var About = require('./about');


var App = React.createClass({
  render:function(){
    return(
      <Router history={browserHistory}>
      <Route path={'/'} component={TodoComponent}> </Route>
      <Route path={'/about'} component={About}> </Route>
      </Router>
    )
  }
});

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
            <Link to={'/about'}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },
    onAdd: function(item){
      var updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todo: updatedTodos
      });
    },

    componentWillMount: function(){
      console.log('componentWillMount');
    },

    componentDidMount: function(){
      console.log('componentDidMount');
      //grabs exteranl data
    },

    componentDidUpdate: function(){
      console.log('componentDidUpdate');
    },

    componentWillUpdate: function(){
      console.log('componentWillUpdate');
    }


});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
