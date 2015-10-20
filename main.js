/**
 * Created by zackaman on 10/19/15.
 *
 * browserify -t babelify main.js -o bundle.js
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

var MainContain = React.createClass({
    render:function(){
        var myClass = "maincontain";
        return <div className={myClass}>{this.props.children}</div>
    }
});

var ProfileCard = React.createClass({
    render:function(){
        var myClass = "card";
        return <div className={myClass} id="contactInfo">
            <div className="profilePicture">
                <img src="img/zackhead2.jpg"/>
            </div>

            <div className="profileInformation">
                <h1>Zachary Aman</h1>
                <div className="label">
                    Commuting from:
                </div>
                955 Pine Street, San Francisco, 94108
                <div className="label">
                    Email Address:
                </div>
                zackyuaman@gmail.com
                <div className="label">
                    Phone Number:
                </div>
                <div className="dg_button">
                    Add Mobile Phone
                </div>

            </div>

        </div>;
    }
});

var TitleCard = React.createClass({
   render:function(){
       var myClass = "card";
       return <div className={myClass}>
           <div className="cardTitle">
                <h2>{this.props.name}</h2>
               </div>
           <div className="cardBody">
                {this.props.children}
               </div>

           </div>
   }
});

var ApplicationRow = React.createClass({
    render:function(){
        return <div className="appRow">
            <div className="jobtitle">
                {this.props.jobtitle}
            </div>
            <div className="company">
                {this.props.company}
            </div>
            <div className="distance">
                {this.props.distance}
                </div>
            <div className="status">
                {this.props.status}
                </div>


        </div>
    }
});

var ActionRequired = React.createClass({
    render:function(){
        return <div className="actionRequired">
            <img src="img/alert2.svg"/>
            ACTION REQUIRED
            </div>
    }
})

var ProfilePage = React.createClass({
   render:function(){
       return <div>
       <Navbar/><MainContain>
           <ProfileCard/>
               <TitleCard name="Submitted Applications">
                   <ApplicationRow jobtitle="Part-Time Host" company="The Battery" distance="0.3 Miles" status="Pending"/>
                   <ApplicationRow jobtitle="Waiter" company="Mousad" distance="1.6 Miles" status="Pending"/>
                   <ApplicationRow jobtitle="Host" company="5A5" distance="1.7 Miles" status="Declined"/>
                   <ApplicationRow jobtitle="Host" company="Chiaroscuro" distance="2.4 Miles" status="Scheduled"/>
               </TitleCard>
               <TitleCard name="Work Experience">
                    <ActionRequired/>
                    <div className="italText">
                        You still need to add your work experience.
                    </div>
                   <div className="dg_button">
                       Upload Resume
                       </div>
            </TitleCard>
               <TitleCard name="References">
            <ActionRequired/>
                   <div className="italText">
                       You still need to add at least one reference.
                   </div>
            </TitleCard>
               <TitleCard name="Availability"/>
           </MainContain>
           </div>
   }
});

ReactDOM.render(
  <ProfilePage/>,
    document.getElementById('example')
);

