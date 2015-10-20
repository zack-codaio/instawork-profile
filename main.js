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
    render: function () {
        return <div className="six columns">
            <label for="refName">What's your reference's name?</label>
            <input className="u-full-width" type="email" placeholder="Full Name" id="refName"/>

            <label for="refPhone">What's their mobile phone number?</label>
            <input className="u-full-width" type="email" placeholder="Mobile phone number" id="refPhone"/>

            <label for="timespan">What's their relationship with you?</label>
            <select className="u-full-width" id="timespan">
                <option value="Option 1">Less than 1 Year</option>
                <option value="Option 2">1 Year</option>
                <option value="Option 3">2 Years</option>
                <option value="Option 3">3 Years</option>
                <option value="Option 3">4 Years</option>
                <option value="Option 3">5 Years</option>

            </select>
            <div className="dg_button">
                Ask for Reference
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
                <TitleCard name="Availability"/>
            </MainContain>
        </div>
    }
});

ReactDOM.render(
    <ProfilePage/>,
    document.getElementById('example')
);

