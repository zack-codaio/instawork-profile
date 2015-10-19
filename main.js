/**
 * Created by zackaman on 10/19/15.
 */

// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

var Navbar = React.createClass({
    render: function(){
        return <div id="navbar">
            <HeaderLogo/>
            <Searchbar/>
            <NavButton name="Jobs" />
            <NavButton name="Profile" />
        </div>;
    }
});

var HeaderLogo = React.createClass({
    render: function(){
        var myClass = "logo";
        return <div className={myClass}>
            INSTAWORK
        </div>
    }
});

var Searchbar = React.createClass({
    render: function(){
        var myClass = "searchbar";
        //should be replaced dynamically with current address, or a blank default
        return <div className={myClass}>
            find jobs near 955 pine street
        </div>
    }
});

var NavButton = React.createClass({
   render: function(){
       var btnClass = "navbutton";
       return <div className={btnClass}>
            {this.props.name}
       </div>
   }
});

var ProfileCard = React.createClass({
    render:function(){
        return <div></div>;
    }
});

var MainContain = React.createClass({
    render:function(){
        var myClass = "maincontain";
        return <div className={myClass}>{this.props.children}</div>
    }
});

var ProfilePage = React.createClass({
   render:function(){
       return <div>
       <Navbar/><MainContain></MainContain>
           </div>
   }
});

ReactDOM.render(
  <ProfilePage/>,
    document.getElementById('example')
);

