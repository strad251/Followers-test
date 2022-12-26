import { Component } from 'react';

import dataUsers from '../data/users.json';
import { updateData } from 'utils/updateData';
import { UserList } from './UserList/UsersList';

export class App extends Component {
  state = {
    users: updateData(dataUsers),
  };

  componentDidMount() {
    const followers = localStorage.getItem('follow');
    const parsedFollowers = JSON.parse(followers);
    if (parsedFollowers) {
      this.setState({ users: parsedFollowers });
    } 
  }
  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.setState.users) {
      localStorage.setItem("follow", JSON.stringify(this.state.users));
    }
  }
  onToggleProp = (id, prop) => {
    this.setState(({ users }) => ({
      users: users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            [prop]: !user[prop],
          };
        }
        return user;
      }),
    }));
  };
  render() {
    const { users } = this.state;
    return <>
    <h1 className='visually-hidden'>Followers app</h1>
    <section><UserList users={users} onToggleProp={this.onToggleProp} /></section>    
    </>
  }
}