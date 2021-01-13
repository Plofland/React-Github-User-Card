import React, { Component } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

const GitHubUserApp = createGlobalStyle`
* {
  color: white;
}
body {
  background-color: steelblue;
}
`;

const Heading = styled.h2`
  text-align: center;
  border-bottom: 2px solid white;
  width: 90%;
  margin: 2% auto;
  padding: 1% 0;
`;

const GithubCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SingleCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  margin: 3% 0;
  border-radius: 10px;
  box-shadow: 
    /* top */ rgba(255, 255, 255, 0.15) 0px -6px 10px,
    /* right */ rgba(255, 255, 255, 0.15) 6px 0px 10px,
    /* bottom */ rgba(255, 255, 255, 0.15) 0px 6px 10px,
    /* left */ rgba(255, 255, 255, 0.15) -6px 0px 10px;
  border: 2px solid mintcream;

  @media (max-width: 1000px) {
    width: 75%;
    justify-content: space-evenly;
  }

  @media (min-width: 1600px) {
    width: 30%;
  }
`;

const Avatar = styled.img`
  width: 33%;
  margin: auto 2%;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  width: 75%;
  margin: 2%;
  h2 {
    font-size: 1.6rem;
    margin-top: 0;
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
  }
`;

const UserInfo = styled.div`
  font-size: 1.2rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`;

const teamMembers = [
  { name: 'April Ashby', login: 'aprilissy' },
  { name: 'Emily Ryan', login: 'emilyr027' },
  { name: 'Juan Ruiz', login: 'ruizaj13' },
  { name: 'Peter Lofland', login: 'plofland' },
  { name: 'Oscar  Figueroa', login: 'oscfig' }
];

export default class App extends Component {
  state = {
    teamMembers: []
  };

  componentDidMount() {
    // const developers = [...teamMembers];

    for (let i in teamMembers) {
      axios
        .get(`https://api.github.com/users/${teamMembers[i].login}`)
        .then((res) => {
          // console.log(res);

          // ...teamMembers,

          // developers[i].image = res.data.avatar_url,
          // developers[i].bio = res.data.bio;
          // developers[i].location = res.data.location,
          // developers[i].url = res.data.html_url,
          // developers[i].followers = res.data.followers,
          // developers[i].following = res.data.following;

          this.setState({
            teamMembers: [...this.state.teamMembers, res.data]
            // bio: res.data.bio,
            // location: res.data.location,
            // url: res.data.html_url,
            // followers: res.data.followers,
            // following: res.data.following
          });
          // console.log(this.state.teamMembers);
          // this.setState({
          //   image: res.data.avatar_url,
          //   bio: res.data.bio,
          //   location: res.data.location,
          //   url: res.data.html_url,
          //   followers: res.data.followers,
          //   following: res.data.following
          // });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleClick(state) {
    console.log(state);
  }

  render() {
    return (
      <>
        <GitHubUserApp />
        <Heading>Github Track Team</Heading>
        {/* <h3>{this.teamMembers.name}</h3> */}
        {/* <img src={this.state.image} alt="profile avatar" />
        <p>Name: {this.state.name}</p>
        <p>Bio: {this.state.bio}</p>
        <p>Username: {this.state.login}</p>
        <p>Location: {this.state.location}</p>
        <a href={this.state.url}>GitHub Profile</a>
        <p>Followers: {this.state.followers}</p>
        <p>Followering: {this.state.following}</p> */}
        {/* <button
          onClick={() => {
            this.handleClick(this.state);
          }}
        >
          Button
        </button> */}
        <GithubCards>
          {this.state.teamMembers.map((dev) => {
            return (
              <SingleCard>
                <Avatar src={dev.avatar_url} alt="GitHub Profile Picture" />
                <ProfileInfo>
                  <h2>{dev.name}</h2>
                  <UserInfo>
                    <p>Bio: {dev.bio}</p>
                    <p>Username: {dev.login}</p>
                    <p>Location: {dev.location}</p>
                    <a href={dev.html_url}>GitHub Profile</a>
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
