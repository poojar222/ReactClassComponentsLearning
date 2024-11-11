import React  from "react";
import './index.css';


class Card extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        follow : "Follow",
        followerscount : 5 ,
        followingcount : 1,
        postcount : 100
      }
  }

  ChangeFollowState = () =>{
    this.state.follow === "Follow" ? this.setState({follow: "Following", followerscount:  this.state.followerscount+1}) : 
                                    this.setState({follow: "Follow", followerscount: this.state.followerscount-1}) ; 
  }

  render(){
    return <>
           
           <div className="profileCard">
            <img src ={this.props.path} alt="Image"/>
            <div className="profileTexts">
              <div className="userNameButton">
                <h3>{this.props.name}</h3>
                <button onClick={this.ChangeFollowState}>{this.state.follow}</button>
              </div>
              <div className="followsText">
                <h3>  {this.state.postcount} Posts </h3>
                <h3> {this.state.followerscount} Followers </h3>
                <h3>{this.state.followingcount}  Following </h3>
              </div>
              <h1>{this.props.fancyname}</h1>
              <h3>{this.props.bio}</h3>
              </div>
              </div>
          </>
  }




}

export default Card;
