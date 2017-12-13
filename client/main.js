import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';
 
import '../imports/startup/accounts-config.js';

import { FlowRouter } from 'meteor/kadira:flow-router';


import App from '/imports/ui/App.js';
import Account from '/imports/ui/Account';
import Student from '/imports/ui/Student';
import Students from '/imports/ui/Students';
 
FlowRouter.route('/', {
    name: 'login',
    action() {
      mount(App, {
        main: <Account/>,
      });
    },
  });

FlowRouter.route('/eleves', {
    name: 'liste-eleves',
    action() {
      mount(App, {
         main: <Students/>,
      });
    },
  });

  FlowRouter.route('/user_name', {
    name: 'eleve',
    action() {
      mount(App, {
         main: <Student/>,
      });
    },
  });


Tracker.autorun(function() {
    if(Meteor.userId()) {
      console.log(Meteor.userId());
      FlowRouter.go('liste-eleves');
    } else {
      FlowRouter.go('login');
    }
});

Meteor.startup(() => {
});