import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'


export default class extends Component {
    render() {
        return(
            <div>
                <section id="hero" className="hero-head">
                    <div className="logo-name">
                        <img className="logo" src="static/images/logo.jpg" alt="Logo"/>
                    </div>
                    <a href={__dirname}><h1>{this.props.fullName}</h1></a>
                    <h3>{this.props.slogan}</h3>
                    <div className="social">
                        <div className="links"><a href="//facebook.com/oshan.shr"><FontAwesome name='facebook' /></a></div>
                        <div className="links"><a href="//twitter.com/shrestha_oshan"><FontAwesome name='twitter' /></a></div>
                        <div className="links"><a href="//instagram.com/shrestha_oshan"><FontAwesome name='instagram' /></a></div>
                        <div className="links"><a href="//linkedin.com/in/oshan-shrestha"><FontAwesome name='linkedin' /></a></div>
                        <div className="links"><a href="//github.com/thisisoshan"><FontAwesome name='github' /></a></div>
                    </div>
                    <hr />
                </section>
                <h2>{this.props.type}</h2>
            </div>
        )
    }
}