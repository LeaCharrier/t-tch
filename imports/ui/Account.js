import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.js';

export default class Account extends Component {
  render() {
    return (
      <div className='container' name='liste-eleves'>
        <AccountsUIWrapper />
      </div>
    )
  }
}