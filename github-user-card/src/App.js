import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Heading = styled.div``;

const GithubCards = styled.div``;

const teamMembers = [
  { name: 'April Ashby', login: 'aprilissy' },
  { name: 'Emily Ryan', login: 'emilyr027' },
  { name: 'Juan Ruiz', login: 'ruizaj13' },
  { name: 'Peter Lofland', login: 'plofland' },
  { name: 'Oscar  Figueroa', login: 'oscfig' }
];

export default class App extends Component {
  state = {
    teamMembers
  };

  componentDidMount() {
    const devInfo = async () => {
      const developers = [...teamMembers];
      for (let i in teamMembers) {
        const { data } = await axios.get(
          `https://api.github.com/users/${team[i].login}`
        );
        developers[i].image = data.avatar_url;
        developers[i].bio = data.bio;
        developers[i].location = data.location;
        developers[i].url = data.html_url;
        developers[i].followers = data.followers;
        developers[i].following = data.following;
      }
      this.setState(developers);
    };
    devInfo();
  }

  render() {
    return (
      <>
        <Heading>Github Track Team</Heading>
        <GithubCards>
          {teamMembers.map((dev) => {
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
        </GithubCards>
      </>
    );
  }
}
