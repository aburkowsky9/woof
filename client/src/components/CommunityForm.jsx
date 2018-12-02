import React, { Component } from 'react';

class CommunityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipcode: '',
      email: '',
      dogName: '',
      dogBreed: '',
      dogWeight: '',
      dogGender: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ firstName: '', lastName: '' });
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
          <section className="ownerInfo">
            <label>
              First Name:
              <input name="firstName" type="text" value={ this.state.firstName } onChange={ this.handleChange } required/>
            </label>
            <label>
              Last Name:
              <input name="lastName" type="text" value={ this.state.lastName } onChange={ this.handleChange } required/>
            </label>
            <label>
              Street Address:
              <input name="streetAddress" type="text" value={ this.state.streetAddress } onChange={ this.handleChange } required/>
            </label>
            <label>
              City:
              <input name="city" type="text" value={ this.state.city } onChange={ this.handleChange } required/>
            </label>
            <label>
              ZIP Code:
              <input name="zipCode" type="text"
              pattern="[0-9]{5}" value={ this.state.zipCode } onChange={ this.handleChange } required/>
            </label>
            <label>
              Email:
              <input name="email" type="email" value={ this.state.email } onChange={ this.handleChange } required/>
            </label>
          </section>
          <section className="dogInfo">
            <label>
              Dog Name:
              <input name="dogName" type="text" value={ this.state.lastName } onChange={ this.handleChange } required/>
            </label>
            <label>
              Dog Breed:
              <input name="dogBreed" type="text" value={ this.state.dogBreed } onChange={ this.handleChange } required/>
            </label>
            <label>
              Dog Weight(lbs):
              <input name="dogWeight" type="text" value={ this.state.dogBreed } onChange={ this.handleChange } required/>
            </label>
            <p>Gender:</p>
              <label>
                Male
                <input name="dogBreed" type="radio" value="male" onChange={ this.handleChange } checked/>
              </label>
              <label>
                Female
                <input name="dogBreed" type="radio" value="female" onChange={ this.handleChange }/>
              </label>
          </section>
          <section>
            <button type="submit">Submit</button>
          </section>
        </form>
      </div>
    );
  }
}

export default CommunityForm;
