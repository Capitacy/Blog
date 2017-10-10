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
                                b: this.props.date.substr(0, 4),
                                l: this.props.date.substr(5, 2),
                                o: this.props.date.substr(8, 2),
                                g: this.props.slug
                            }
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
                            this.props.category != "" ? this.props.category.map(function(post, i) {
                                return <Link href={{
                                    pathname: '/categories',
                                    query: {
                                        s: post.slug
                                    }
                                }}><a><p key={i}>{post.title}</p></a></Link>
                            }) : <Link href={{
                                pathname: '/categories',
                                query: {
                                    s: 'uncategorized'
                                }
                            }}><a><p>Uncategorized</p></a></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}