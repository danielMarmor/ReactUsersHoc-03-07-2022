import React from 'react';
import axios from 'axios';
import User from './User';

export class UsersList extends React.Component{
    state = {
      users : []
    }
    urlUsersApi = 'https://jsonplaceholder.typicode.com/users';
    componentDidMount(){
        this.getUsers(this.urlUsersApi)
        .then(users =>{
             this.setState({
              ...this.state, 
              users : users
            });
        })

    }
    getUsers =async(url)=>{
        const response = await axios.get(url);
        const users =await response.data;
        return users;    
    }
    render(){
      return <div className='users-grid'>
      {this.state.users.map(user =>
             <User key={user.id}  user={user}/>
          )
      }
      </div>
    }
}