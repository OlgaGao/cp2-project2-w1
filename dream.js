
import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    image:"https://cdn4.vectorstock.com/i/1000x1000/51/08/cartoon-man-running-away-from-grim-reaper-or-vector-25155108.jpg",
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    
    rightLabel:"sky",
    leftPage: "onthetrain",
    
    rightPage: "inthesky"
  },
  onthetrain: {
    image:"https://i.pinimg.com/736x/54/69/dc/5469dce4bf8826d5b8cb3cc0e6ed9a64.jpg",
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
    
    inthesky: {
      image:"https://media1.giphy.com/media/N1ZAtLMnqX1U4/giphy.gif",
    text:
      "Welcome,do you know you are flying?",
    leftLabel: "Yes",
    rightLabel: "No",
    leftPage: "accident",
    rightPage: "telling"
  
  },
  telling:{
    text:
    "we had an accident and we were thrown out to the sky",
    leftLabel:"what are we going to do?",
    rightLabel:"Omg,we are about to die",
    leftPage:"pray",
    rightPage:"truth"
  
  },
  accident:{
    text:
    "As you know, we can't get away from this accident",
    leftLabel:"so scared",
    rightLabel:"That's cool, we are flying",
    leftPage:"nopain",
    rightPage:"optimistic"
  
  },
  truth:{
    image:"https://previews.123rf.com/images/tigatelu/tigatelu1503/tigatelu150300087/37538595-cartoon-sad-boy.jpg",
    text:
    "I'm afraid so,we only have couple minutes left",
    leftLabel:"I will be prepare for that",
    rightLabel:"WTF",
    leftPage:"wait",
    rightPage:"no"
  
  },


 pray:{
   image:"https://st4.depositphotos.com/10312166/24492/v/1600/depositphotos_244924184-stock-illustration-group-people-pray-god-prayer.jpg",
    text:
    "let's pray...",
    leftLabel:"Dear lord...",
    rightLabel:"Final and first pray...",
    leftPage:"God",
    rightPage:"Finallyhere"
   },
   nopain:{
    text:
    "It will be quick with no pain",
    leftLabel:"That's so lucky!",
    rightLabel:"Oh no!",
    leftPage:"wait",
    rightPage:"Mommy"
   },
 optimistic:{
   image:"https://ih0.redbubble.net/image.993651775.3253/pp%2C185x205-pad%2C210x230%2Cf8f8f8.u9.jpg",
    text:
    "keep your optimistic! We still have couple minutes to become a meat pie",
    leftLabel:"Meat pie!Meat Pie",
    rightLabel:"I don't like meat pie!",
    leftPage:"readyTG",
    rightPage:"mpcoming"
   },
   wait:{
    image:"https://thumbs.dreamstime.com/z/conceptual-cartoon-businessman-holding-large-clock-stick-man-drawing-illustration-business-concept-time-management-107522800.jpg",
    text:
    "counting down,10,9,8,7,6,5......3,2,1",
    leftLabel:"Goodbyeworld",
    rightLabel:"Mommy",
    leftPage:"byeworld",
    rightPage:"Mommy"
    
   },
   no:{
     image:"https://www.pinclipart.com/picdir/middle/3-30044_scared-cartoon-eyes-courage-the-cowardly-dog-eyes.png",
    text:
    "I'm totally dying!",
    leftLabel:"byeWorld",
    rightLabel:"Mommy",
    leftPage:"byeWorld",
    rightPage:"Mommy"
    },
 God:{
   image:"https://cdn5.vectorstock.com/i/1000x1000/40/54/jesus-god-cartoon-design-vector-20454054.jpg",
    text:
    "God always be with you",
    leftLabel:"byeWorld",
    rightLabel:"Mommy",
    leftPage:"byeWorld",
    rightPage:"Mommy"
   },
   Finallyhere:{
     image:"https://cdn3.vectorstock.com/i/1000x1000/40/47/jesus-god-cartoon-design-vector-20454047.jpg",
    text:
    "Finally you here",
    leftLabel:"notuseful",
    rightLabel:"toolate",
    leftPage:"sorry",
    rightPage:"ok"
   },
   sorry:{
     image:"https://static.seattletimes.com/wp-content/uploads/2018/09/web-Careers-Career-Advice-Break-the-sorry-cycle-art-780x911.jpg",
     text:"Sorry!",
     leftLabel:"byeWorld",
    rightLabel:"Mommy",
    leftPage:"byeWorld",
    rightPage:"Mommy"

   },
   ok:{
     image:"https://cdn4.vectorstock.com/i/1000x1000/54/88/whatever-guy-meme-face-for-any-design-vector-10965488.jpg",
    text:"All right, I can't do anything!",
    leftLabel:"byeWorld",
   rightLabel:"Mommy",
   leftPage:"byeWorld",
   rightPage:"Mommy"

  },
   
   Mommy:{
     image:"https://pngimage.net/wp-content/uploads/2018/06/mommy-cartoon-png-2.png",
    text:"wake up!!!!!",
    leftLabel:"did i just have a bad dream?",
    rightLabel:"What?",
    leftPage:"onthetrain",
    rightPage:"inthesky"
    },
   readyTG:{
    text:
    "Are you ready to go?",
    leftLabel:"Yes!",
    leftPage:"byeWorld"  
   },
   mpcoming:{
     image:"https://image.shutterstock.com/image-vector/cartoon-man-about-be-hit-260nw-642132061.jpg",
    text:
    "Meatpie is coming!!",
    leftLabel:"OH NO!!!",
    leftPage:"byeWorld"
    },
    notuseful:{
      text:
      "you are not useful!",
      leftLabel:"Sorry",
      rightLabel:"byeWorld"
      },
      toolate:{
        text:
        "That's too late!",
        leftLabel:"Sorry",
        rightLabel:"Mommy"
        },
     byeWorld:{
          text:
          "Goodbye World!!!!"
     },
     death:{
       image:"https://static.boredpanda.com/blog/wp-content/uploads/2016/09/cartoon-characters-monsters-illustrations-dennis-carlsson-13-57eb660ca56c1__700.jpg",
      text:
      "You will never get out",
      leftLabel:"OH no",
      rightLabel:"Let me out",
      leftPage:"noway",
      rightPage:"nothappen"
     },
     life:{
       image:"https://media.gettyimages.com/vectors/businessman-clutch-of-chance-cartoon-vector-id513705535",
      text:
      "You have another chance now",
      leftLabel:"Lucky!!!",
      rightLabel:"YES!!!",
      leftPage:"Mommy2",
      rightPage:"Mommy2"
     },
     
     
     noway:{
       image:"https://cdn2.vectorstock.com/i/1000x1000/53/31/death-skeleton-cartoon-vector-1585331.jpg",
      text:
      "Say goodbye to the World",
      leftLabel:"byeWorld!",
      rightLabel:"byeWorld",
      leftPage:"byeWorld",
      rightPage:"byeWorld"
     },
     nothappen:{
       image:"https://cdn2.vectorstock.com/i/1000x1000/53/31/death-skeleton-cartoon-vector-1585331.jpg",
      text:
      "It's not going to happen",
      leftLabel:"byeWorld!",
      rightLabel:"byeWorld",
      leftPage:"byeWorld",
      rightPage:"byeWorld"
     },
     Mommy2:{
      image:"https://pngimage.net/wp-content/uploads/2018/06/mommy-cartoon-png-2.png",
     text:
     "WAKE UP NOW!!"
     
    },
  
    
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];
    var TopLabel;
    return (
      <div className="App">
        <div><img src={pageData.image} width="200" /> </div>
        <p>{pageData.text}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
       
       

      </div>
    );
  }
}

export default App;
