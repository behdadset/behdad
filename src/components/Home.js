import React, { Component } from 'react'
import img from '../behdad.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <img className="col-md-6" src={img}></img>
                    <div className="col-md-6">
                        <h2>Welcome</h2>
                        <span className="flaticon-analysis"></span>
                        <h5>Passion for problem solving. Ideas excite me and challenges motivate me. I am the type of person who is driven to get things done and views obstacles as an exciting challenge that demands a creative, technical solution.</h5><br/><br/>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>When I Am Working</h4>
                                <h5>Time flies by, I make sure I am immersed in my chosen project or projects. I love solving problems and overcoming challenges. Being a programmer is about dealing with a series of obstacles and learning how to overcome them.</h5>

                            </div>
                            <div className="col-md-6">
                                <h4>In My Spare Time</h4>
                                <h5>Swim, Sun, Sport, Friends and Learn. It is important to enjoy the simple things in life and to be able to share the big events with the people that matter.</h5>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
