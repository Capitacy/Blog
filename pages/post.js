import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import HeroHead from '../components/HeroHead'
import Comment from '../components/Comment'
import 'isomorphic-fetch'

const url = "http://localhost/wordpress/wp"
const api = "v2"
const mode = "get_post"

export default class extends React.Component {

    static async getInitialProps({ query: { i, s }}) {
        const res = await fetch(`${url}/${api}/${mode}/?id=${i}&slug=${s}`)
        const data = await res.json()
        return { data }
    }

    navCheckNext(props) {
        let r = ""
        if (this.props.data.previous_url) {
            return <Link href={
                {
                    pathname: '/post',
                    query: {
                        i : '',
                        s: this.props.data.previous_url.substr((url.length+12), this.props.data.previous_url.length - (url.length+13))
                    }
                }
                 }><a><div className="navigate right"></div></a></Link>
        }
        return r
    }
    navCheckPrev(props) {
        let q
        if (this.props.data.next_url) {
            return <Link href={
                {
                    pathname: '/post',
                    query: {
                        i: "",
                        s: this.props.data.next_url.substr((url.length+12), this.props.data.next_url.length - (url.length+13))
                    }
                }
                 }><a><div className="navigate left"></div></a></Link>
        }
        return q
    }

    render() {
        return(
            <div>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                    <title>
                    {
                        this.props.data.post.title.length > 0 ? this.props.data.post.title : 'Posts'
                    } - Oshan Shrestha</title>
                    
                    <link rel="stylesheet" href="static/build/styles/global.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="static/build/styles/post.css" />
                </Head>
                <main>       
                    <HeroHead fullName="Oshan Shrestha" slogan="A high-school graduate web developer" type={this.props.data.post.title_plain} />
                    <div className="post-meta">
                        <p className="date-author"><FontAwesome className="sm-margin" name='calendar' />{this.props.data.post.date.substr(0, 10)}</p>
                        <p className="cates">{this.props.data.post.categories != "" ? this.props.data.post.categories.map(function(post,i) {
                            return <Link key={i} href={{
                                pathname: '/categories',
                                query: {
                                    s: post.slug
                                }
                            }}><a><i title={post.description}>{post.title}</i></a></Link>
                        }) : <Link href={{
                            pathname: '/categories',
                            query: {
                                s: 'uncategorized'
                            }
                        }}><a><i>Uncategorised</i></a></Link>}</p>
                    </div>
                    <hr />
                    <div className="post"  dangerouslySetInnerHTML={
                        {
                        __html: this.props.data.post.content
                        }
                    }>
                        
                    </div>
                    <hr />
                    <p className="tags">
                        Tags: 
                        {
                            this.props.data.post.tags != "" ? this.props.data.post.tags.map(function(post, i){return <Link key={i} href={{pathname: '/tag',query: {s: post.slug}}}><a><i title={post.description}>@{post.slug}</i></a></Link>}) :  <i>(empty)</i>
                        }
                    </p>
                    <form className="comment-box">
                        <h3>New Comment</h3>
                        <p>First Name:<sup>*</sup></p>
                        <input required type="text"/>
                        <p>Last Name:<sup>*</sup></p>
                        <input required type="text"/>
                        <p>Email:<sup>*</sup></p>
                        <input required type="email"/>
                        <p>Comment:<sup>*</sup></p>
                        <textarea rows="5" required type="text" ></textarea>
                        <button>Submit</button>
                    </form>
                    <section className="comments">
                        {
                            this.props.data.post.comments.map(function(post, i){
                                return <Comment key={i} fname={post.author.first_name} lname={post.author.last_name} date={post.date.substr(0, 10)} content={post.content} />
                            })
                        }
                    </section>
                </main>
                    {
                        this.navCheckNext()
                    }
                    {
                        this.navCheckPrev()
                    }
            </div>
        )
    }
}