import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

let d = ""

export default class Comment extends Component {
    constructor() {
        super()
        d = new Date()
        console.log(d)
    }
    render() {
        return (
            <div className="c-box">
                <h4 className="name"><FontAwesome className="sided" name="user-circle" /><span>{this.props.fname}</span> <span>{this.props.lname}</span></h4>
                <pre className="date">{this.props.date}</pre>
                <p dangerouslySetInnerHTML={
                    {
                        __html: this.props.content
                    }
                }></p>
            </div>
            )
    }
}