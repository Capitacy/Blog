import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
    render() {
        return (
        <div>
            <div className="blog-content">
                <div className="blog-post">
                    <h3><Link href={
                        {
                            pathname: '/post',
                            query: {
                                i: this.props.id,
                                s: this.props.slug
                            }
                        }
                         }><a>{this.props.title}</a></Link></h3>
                    <div className="category">
                        <div className="cate-date">{this.props.date}</div>/ &nbsp;
                        {
                            this.props.category != "" ? this.props.category.map(function(post, i) {
                                return <Link key={i} href={{
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
                    <p dangerouslySetInnerHTML={
                        {
                        __html: this.props.content
                        }
                    }
                    ></p>
                </div>
            </div>
        </div>
        )
    }
}