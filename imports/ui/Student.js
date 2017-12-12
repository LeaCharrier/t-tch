import React, { Component } from 'react';
import { Students } from '../api/students.js';
// Student component - represents a single todo item
export default class Student extends Component {
  deleteThisStudent() {
    Students.remove(this.props.student._id);
  }
 
  render() {
    // Give students a different className when they are checked off,
    // so that we can style them nicely in CSS
 
    return (
      <li>
        <button className="delete" onClick={this.deleteThisStudent.bind(this)}>
          &times;
        </button>
        <h1>{this.props.student.name}</h1>
        <span>{this.props.student.select}</span>
 		<a href={this.props.student.linkGit}>{this.props.student.linkGit}</a>
      </li>
 	);
  }
}