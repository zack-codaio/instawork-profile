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
    render: function () {
        return <div id="navbar">
            <HeaderLogo/>
            <Searchbar/>
            <NavButton name="Jobs" />
            <NavButton name="Profile" />
        </div>;
    }
});

var HeaderLogo = React.createClass({
    render: function () {
        var myClass = "logo";
        return <div className={myClass}>
            INSTAWORK
        </div>
    }
});

var Searchbar = React.createClass({
    render: function () {
        var myClass = "searchbar";
        //should be replaced dynamically with current address, or a blank default
        return <div className={myClass}>
            find jobs near 955 pine street
        </div>
    }
});

var NavButton = React.createClass({
    render: function () {
        var btnClass = "navbutton";
        return <div className={btnClass}>
            {this.props.name}
        </div>
    }
});

var MainContain = React.createClass({
    render: function () {
        var myClass = "maincontain container";
        return <div className={myClass}>{this.props.children}</div>
    }
});

var ProfileCard = React.createClass({
    render: function () {
        var myClass = "card";
        return <div className="twelve columns margin-override">
            <div className={myClass} id="contactInfo">
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
            </div>
        </div>;
    }
});

var TitleCard = React.createClass({
    render: function () {
        var myClass = "card";
        return <div className="twelve columns margin-override">
            <div className={myClass}>
                <div className="cardTitle">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="cardBody">
                {this.props.children}
                </div>
            </div>
        </div>
    }
});

var ApplicationRow = React.createClass({
    render: function () {
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
    render: function () {
        return <div className="six columns">
            <div className="actionRequired">
                <img src="img/alert2.svg"/>
                ACTION REQUIRED
            </div>
        {this.props.children}
        </div>
    }
});


//<div class="six columns">
//    <label for="exampleEmailInput">Your email</label>
//    <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
//    </div>
//    <div class="six columns">
//        <label for="exampleRecipientInput">Reason for contacting</label>
//        <select class="u-full-width" id="exampleRecipientInput">
//            <option value="Option 1">Questions</option>
//            <option value="Option 2">Admiration</option>
//            <option value="Option 3">Can I get your number?</option>
//        </select>
//    </div>

var ResumeForm = React.createClass({
    render: function () {
        return <div className="six columns">
            <div className="dg_button">
                Upload Resume
            </div>
            <div className="or">
                <div></div>
                OR
                <div></div>
            </div>


            <label for="workplace">Where did you work?</label>
            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="workplace"/>

            <label for="jobname">What was your job?</label>
            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="jobname"/>

            <label for="timespan">How long did you work there?</label>
            <select className="u-full-width" id="timespan">
                <option value="Option 1">Less than 1 Year</option>
                <option value="Option 2">1 Year</option>
                <option value="Option 3">2 Years</option>
                <option value="Option 3">3 Years</option>
                <option value="Option 3">4 Years</option>
                <option value="Option 3">5 Years</option>

            </select>
            <div className="dg_button">
                Add Experience
            </div>
        </div>
    }
});

var ReferencesForm = React.createClass({
    getInitialState: function () {
        return {
            refType: 0
        };
    },
    handleClick: function (refType) {
        console.log("handling click " + refType);

        this.setState({
            refType: refType
        })
    },
    render: function () {
        var refForm = this;
        console.log("my ref form:");
        console.log(refForm);

        var refType = this.state.refType;

        return <div className="six columns">
            <label for="refName">What's your reference's name?</label>
            <input className="u-full-width" type="email" placeholder="Full Name" id="refName"/>

            <label for="refPhone">What's their mobile phone number?</label>
            <input className="u-full-width" type="email" placeholder="Mobile phone number" id="refPhone"/>

            <label >What's their relationship with you?</label>
            <div className="row">
                <div className="six columns refRelation" >
                    <img src={refType == 1 ? "img/manager-on.png" : "img/manager-off.png"} onClick={refForm.handleClick.bind(null, 1)}/>
                    <div className="iconLabel">
                        Manager
                    </div>
                </div>
                <div className="six columns refRelation">
                    <img src={refType == 2 ? "img/owner-on.png" : "img/owner-off.png"} onClick={refForm.handleClick.bind(null, 2)}/>
                    <div className="iconLabel">
                        Owner
                    </div>
                </div>
                <div className="six columns refRelation">
                    <img src={refType == 3 ? "img/coworker-on.png" : "img/coworker-off.png"} onClick={refForm.handleClick.bind(null, 3)}/>
                    <div className="iconLabel">
                        Co-worker
                    </div>
                </div>
                <div className="six columns refRelation">
                    <img src={refType == 4 ? "img/friend-on.png" : "img/friend-off.png"} onClick={refForm.handleClick.bind(null, 4)}/>
                    <div className="iconLabel">
                        Friend
                    </div>
                </div>

            </div>
            <div className="dg_button">
                Ask for Reference
            </div>

        </div>
    }
});

var AvailabilityToggles = React.createClass({
    render: function () {
        return <div className="row">
            <div className="six columns">
                <h3 className="subhead">
                    Weekdays
                </h3>
                <AvailabilityRow availableImg="img/morning-on.png" notAvailableImg="img/morning-off.png" availableText="weekday mornings."/>
                <AvailabilityRow availableImg="img/afternoon-on.png" notAvailableImg="img/afternoon-off.png" availableText="weekday afternoons."/>
                <AvailabilityRow availableImg="img/evening-on.png" notAvailableImg="img/evening-off.png" availableText="weekday evenings."/>
            </div>

            <div className="six columns">
                <h3 className="subhead">
                    Weekends
                    </h3>
                <AvailabilityRow availableImg="img/morning-on.png" notAvailableImg="img/morning-off.png" availableText="weekend mornings."/>
                <AvailabilityRow availableImg="img/afternoon-on.png" notAvailableImg="img/afternoon-off.png" availableText="weekend afternoons."/>
                <AvailabilityRow availableImg="img/evening-on.png" notAvailableImg="img/evening-off.png" availableText="weekend evenings."/>
            </div>
        </div>
    }

});

var AvailabilityRow = React.createClass({
    getInitialState: function () {
        return {
            available: true
        }
    },
    handleClick: function () {
        this.setState({
            available: !this.state.available
        })
    },
    render: function () {
        var availabilityClass = "";
        if(!this.state.available){
            availabilityClass += "off";
        }

        return <div className="availabilityWrapper" onClick={this.handleClick}>
        <img src={this.state.available ? this.props.availableImg : this.props.notAvailableImg}/>
            <div className={availabilityClass}>
                   {this.state.available ? "I am available on "+this.props.availableText : "I am not available on "+this.props.availableText}
            </div>
        </div>
    }
});

var ProfilePage = React.createClass({
    render: function () {
        return <div>
            <Navbar/>
            <MainContain>

                <ProfileCard/>
                <TitleCard name="Submitted Applications">
                    <ApplicationRow jobtitle="Part-Time Host" company="The Battery" distance="0.3 Miles" status="Pending"/>
                    <ApplicationRow jobtitle="Waiter" company="Mousad" distance="1.6 Miles" status="Pending"/>
                    <ApplicationRow jobtitle="Host" company="5A5" distance="1.7 Miles" status="Declined"/>
                    <ApplicationRow jobtitle="Host" company="Chiaroscuro" distance="2.4 Miles" status="Scheduled"/>
                </TitleCard>

                <TitleCard name="Work Experience">
                    <div className="row">
                        <ActionRequired>
                            <div className="italText">
                                You still need to add your work experience.
                            </div>
                        </ActionRequired>
                        <ResumeForm/>
                    </div>

                </TitleCard>
                <TitleCard name="References">
                    <div className="row">
                        <ActionRequired>
                            <div className="italText">
                                You still need to add at least one reference.
                            </div>
                        </ActionRequired>

                        <ReferencesForm/>
                    </div>

                </TitleCard>
                <TitleCard name="Availability">
                    <AvailabilityToggles/>
                    </TitleCard>
            </MainContain>
        </div>
    }
});

ReactDOM.render(
    <ProfilePage/>,
    document.getElementById('example')
);

