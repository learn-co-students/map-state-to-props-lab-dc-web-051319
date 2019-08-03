import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    let t = this
    
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
            {this.props.users.map((user, index) => 
          
        {return <div>
           <li key={index}>{user.username}</li>
              </div>})
          }
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const  mapStateToProps = (state) => {
 
  return {users: state.users, numberOfUsers: state.users.length}
} 
export default connect(mapStateToProps)(Users)
