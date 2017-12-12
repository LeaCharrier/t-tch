import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';
 
import '../imports/startup/accounts-config.js';

import { FlowRouter } from 'meteor/kadira:flow-router';


import App from '/imports/ui/App.js';
import Student from '/imports/ui/Student';
import Students from '/imports/ui/Students';
 
FlowRouter.route('/', {
    name: 'login',
    action() {
      mount(App, {
        main: <a href='eleves'>Tout le monde</a>,
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


Meteor.startup(() => {
 
});