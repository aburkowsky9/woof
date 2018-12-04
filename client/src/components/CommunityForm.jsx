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
      zipCode: '',
      email: '',
      dogName: '',
      dogBreed: '',
      dogWeight: '',
      dogGender: '',
      dogPic: null,
      dogPicUrl: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  fileChangeHandler({ target }) {
    const dogPic = target.files[0];
    const dogPicUrl = URL.createObjectURL(target.files[0]);
    console.log(dogPic);
    this.setState({
      dogPic,
      dogPicUrl,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const signupInfo = { ...this.state };
    delete signupInfo.dogPicUrl;
    console.log(this.state);
    try {
      const response = await fetch('/join', {
        method: 'POST',
        body: JSON.stringify(signupInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
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
      dogPic: null,
      dogPicUrl: null,
    });
  }

  render() {
    return (
      <div >
        <h2>Join the Woof Community!</h2>
        <form onSubmit={this.handleSubmit} >
          <section className="ownerInfo">
            <h3>Owner Information</h3>
            <div>
              <label>
                <span>First Name:</span>
                <input name="firstName" type="text" value={ this.state.firstName } onChange={ this.handleChange } required/>
              </label>
              <label>
                <span>Last Name:</span>
                <input name="lastName" type="text" value={ this.state.lastName } onChange={ this.handleChange } required/>
              </label>
            </div>
            <br/>
            <div>
              <label>
                <span>Street Address:</span>
                <input name="streetAddress" type="text" value={ this.state.streetAddress } onChange={ this.handleChange } required/>
              </label>
              <br/>
              <label>
                <span>City:</span>
                <input name="city" type="text" value={ this.state.city } onChange={ this.handleChange } required/>
              </label>
              <label>
                <span>State:</span>
                <input name="state" type="text" value={ this.state.state } onChange={ this.handleChange } required/>
              </label>
              <br/>
              <label>
                <span>ZIP Code:</span>
                <input name="zipCode" type="text"
                pattern="[0-9]{5}" value={ this.state.zipCode } onChange={ this.handleChange } required/>
              </label>
            </div>
            <br/>
            <label>
              <span>Email:</span>
              <input name="email" type="email" value={ this.state.email } onChange={ this.handleChange } required/>
            </label>
          </section>
          <section className="dogInfo">
            <h3>Dog Information</h3>
            <label>
              <span>Dog Name:</span>
              <input name="dogName" type="text" value={ this.state.dogName } onChange={ this.handleChange } required/>
            </label>
            <br/>
            <label>
              <span>Dog Breed:</span>
              <input name="dogBreed" type="text" value={ this.state.dogBreed } onChange={ this.handleChange } required/>
            </label>
            <br/>
            <label>
              <span>Dog Weight(lbs):</span>
              <input name="dogWeight" type="text" value={ this.state.dogWeight } onChange={ this.handleChange } required/>
            </label>
            <fieldset>
              <legend>Gender</legend>
              <label>
                Male
                <input name="dogGender" type="radio" value="male" onChange={ this.handleChange }/>
              </label>
              <label>
                Female
                <input name="dogGender" type="radio" value="female" onChange={ this.handleChange }/>
              </label>
            </fieldset>
            <label>
              Upload Image of Your Pup!
              <input type="file" onChange={ this.fileChangeHandler } />
            </label>
            <img src={ this.state.dogPicUrl }/>
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
