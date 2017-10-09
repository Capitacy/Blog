import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class extends Component {
    render() {
        return(
            <div>
                <div className="hero">
                    <div className="logo-name">
                        <img className="logo" src="static/images/logo.jpg" alt="Logo"/>
                    </div>
                    <a href={__dirname}><h1>{this.props.fullName}</h1></a>
                    <h3>{this.props.slogan}</h3>
                    <div className="social">
                        <div className="links"><a href="#"><FontAwesome name='facebook' /></a></div>
                        <div className="links"><a href="#"><FontAwesome name='twitter' /></a></div>
                        <div className="links"><a href="#"><FontAwesome name='instagram' /></a></div>
                        <div className="links"><a href="#"><FontAwesome name='linkedin' /></a></div>
                        <div className="links"><a href="#"><FontAwesome name='skype' /></a></div>
                    </div>
                    <hr />
                </div>
                <h2>{this.props.type}</h2>
            </div>
        )
    }
}