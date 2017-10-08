import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
    render() {
        return (
        <div>
            <div className="blog-content">
                <div className="blog-post">
                    <h3><Link prefetch href={
                        {
                            pathname: '/post',
                            query: {
                                y: this.props.date.substr(0, 4),
                                m: this.props.date.substr(5, 2),
                                d: this.props.date.substr(8, 2),
                                s: this.props.slug
                            },
                            asPath: '/post/2017'
                        }                         
                         }><a>{this.props.title}</a></Link></h3>
                    <p dangerouslySetInnerHTML={
                        {
                        __html: this.props.content
                        }
                    }
                    ></p>
                    <div className="category">
                        <div className="cate-date">{this.props.date}</div>
                        {
                            this.props.category != "" ? this.props.category.map(function(post, i) { return <p key={i}>{post.title}</p> }) : <p>Uncategorised</p>
                        }
                    </div>
                </div>
            </div>
        </div>
        )

    }
}