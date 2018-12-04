import React from 'react';
import Navbar from './Navbar.jsx';
import CommunityForm from './CommunityForm.jsx';
import NearbyUsers from './NearbyUsers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      email: '',
      zipCode: '',
      nearbyUsers: null,
    };
    this.handleSuccessfulJoin = this.handleSuccessfulJoin.bind(this);
  }

  handleSuccessfulJoin(email, zipCode, nearbyUsers) {
    this.setState({
      formSubmitted: true,
      email,
      zipCode,
      nearbyUsers,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
         {!this.state.formSubmitted
           ? <CommunityForm handleSuccessfulJoin={ this.handleSuccessfulJoin }/>
           : <NearbyUsers />
         }
        </div>
      </div>
    );
  }
}


export default App;
