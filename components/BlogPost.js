import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
        <div className="blog-content">
            <div className="blog-post">
                <h3>{this.props.title}</h3>
                <p dangerouslySetInnerHTML={{
                    __html: this.props.content
                    }}
                ></p>
                <div className="category">
                    {
                        this.props.category != "" ? this.props.category.map(function(post, i) { return <p key={i}>{post.title}</p> }) : <p>Uncategorised</p>
                    }
                </div>
            </div>
            <hr />
        </div>
        )

    }
}