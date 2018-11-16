import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
let clickedArray = []
let points = 0
let highScore = 0
let note
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    points,
    highScore,
    note:"click an image to begin"
  };

  pushArray = id => {
    console.log(id)
    if (!clickedArray.includes(id)){
      clickedArray.push(id)
      points++
      note="You guessed correctly!"
      if (points>highScore){
        highScore=points
      }
      if (points === 12){
        console.log("you win")
        clickedArray.length=0
        points=0
      }
    }
    else{
      console.log(`${id} in Array`)
      note="Doh!!!!"
      clickedArray.length=0
      points=0
    }
    console.log(points)
    this.setState({highScore, points, note})
  };
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
       
        <Title>Clicky Game! 
          <br/>Points: {this.state.points}
          <br/>High Score: {this.state.highScore} 
          <br/>{this.state.note} 
           </Title>
        
        {this.state.friends.map((friend => (
          <FriendCard
            pushArray={this.pushArray}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
          
        )))}
  
      </Wrapper>
     
    );
  }
}

export default App;
