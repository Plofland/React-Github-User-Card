import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Heading = styled.div``;

const GithubCards = styled.div``;

const SingleCard = styled.div``;

const Avatar = styled.img``;

const ProfileInfo = styled.div``;

const UserInfo = styled.div``;

const teamMembers = [
  { name: 'April Ashby', login: 'aprilissy', data: {} },
  { name: 'Emily Ryan', login: 'emilyr027', data: {} },
  { name: 'Juan Ruiz', login: 'ruizaj13', data: {} },
  { name: 'Peter Lofland', login: 'plofland', data: {} },
  { name: 'Oscar  Figueroa', login: 'oscfig', data: {} }
];

export default class App extends Component {
  state = {
    teamMembers
    // name: ''
  };

  componentDidMount() {
    // const developers = [...teamMembers];

    for (let i = 0; i < teamMembers.length; i++) {
      axios
        .get(`https://api.github.com/users/${teamMembers[i].login}`)
        .then((res) => {
          console.log(res);

          this.setState({
            data: res.data

            // image: res.data.avatar_url,
            // bio: res.data.bio,
            // location: res.data.location,
            // url: res.data.html_url,
            // followers: res.data.followers,
            // following: res.data.following
          });
          console.log(teamMembers);
          // developers[i].image = res.data.avatar_url,
          // developers[i].bio = res.data.bio,
          // developers[i].location = res.data.location,
          // developers[i].url = res.data.html_url,
          // developers[i].followers = res.data.followers,
          // developers[i].following = res.data.following,
        })
        .catch((error) => {
          console.log(error);
        });
      // this.setState(developers);
    }

    // const devInfo = async () => {
    //   const developers = [...teamMembers];
    //   for (let i in teamMembers) {
    //     const { data } = await axios.get(
    //       `https://api.github.com/users/${teamMembers[i].login}`
    //     );
    //     console.log(data);
    //     developers[i].image = data.avatar_url;
    //     developers[i].bio = data.bio;
    //     developers[i].location = data.location;
    //     developers[i].url = data.html_url;
    //     developers[i].followers = data.followers;
    //     developers[i].following = data.following;
    //   }
    //   this.setState({ developers });
    // };
    // devInfo();
  }

  render() {
    return (
      <>
        <Heading>Github Track Team</Heading>
        <p>{this.state.name}</p>
        <img src={this.state.image} alt="profile avatar" />
        <p>Bio: {this.state.bio}</p>
        <p>Username: {this.state.login}</p>
        <p>Location: {this.state.location}</p>
        <a href={this.state.url}>GitHub Profile</a>
        <p>Followers: {this.state.followers}</p>
        <p>Followering: {this.state.following}</p>
        {/* <GithubCards>
          {this.teamMembers.map((dev) => {
            return (
              <SingleCard>
                <Avatar src={dev.image} alt="GitHub Profile Picture" />
                <ProfileInfo>
                  <h2>{dev.name}</h2>
                  <UserInfo>
                    <p>Bio: {dev.bio}</p>
                    <p>Username: {dev.login}</p>
                    <p>Location: {dev.location}</p>
                    <a href={dev.url}>GitHub Profile</a>
                    <p>Followers: {dev.followers}</p>
                    <p>Followering: {dev.following}</p>
                  </UserInfo>
                </ProfileInfo>
              </SingleCard>
            );
          })}
        </GithubCards> */}
      </>
    );
  }
}
