import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
 
import { Students } from '../api/students.js';
 
import Student from './Student.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
 
// App component - represents the whole app
class StudentsUI extends Component {
   handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.textName).value.trim();
    const select = ReactDOM.findDOMNode(this.refs.selectingComponent).value;
    const linkGit = ReactDOM.findDOMNode(this.refs.linkGit).value.trim();
 
    Students.insert({
      name,
      select,
      linkGit,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textName).value = '';
    ReactDOM.findDOMNode(this.refs.linkGit).value = '';
  }

  renderStudents() {
    return this.props.students.map((student) => (
      <Student key={student._id} student={student} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Liste des étudiants</h1>

           <AccountsUIWrapper />

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textName"
              placeholder="Type to add new students"
            />
            <select ref='selectingComponent'>
              <option value='Développeur'>Développeur</option>
              <option value='Designer'>Designer</option>
              <option value='Fullstack'>Fullstack</option>
            </select>
            <input
              type="text"
              ref="linkGit"
              placeholder="Link of your Github"
            />
            <button >Ajouter un élève</button>
          </form>
        </header>
 
        <ul>
          {this.renderStudents()}
        </ul>
      </div>
    );
  }
}
 
export default withTracker(() => {
  return {
    students: Students.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(StudentsUI);