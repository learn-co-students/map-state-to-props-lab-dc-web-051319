import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
    <div>
      <ul>{this.props.users.length} Users!
        {users}
      </ul>
    </div>
    ) 
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { 
    // key in this space = this.props.key above
    // value (state.users) is from reducer (manageUsers.js)
    users: state.users
  
  }
}
export default connect(mapStateToProps)(Users)
