import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import HeroHead from '../components/HeroHead'
import 'isomorphic-fetch'

export default class extends React.Component {

    static async getInitialProps({ query: { b, l, o, g } }) {
        const res = await fetch(`http://localhost/wordpress/wp/${b}/${l}/${o}/${g}/?json=1`)
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
                        b: this.props.data.previous_url.substr(30, 4),
                        l: this.props.data.previous_url.substr(35, 2),
                        o: this.props.data.previous_url.substr(38, 2),
                        g: this.props.data.previous_url.substr(41, this.props.data.previous_url.length - 42)
                    }
                }                         
                 }><a><div className="navigate right"></div></a></Link>
        }
        return r
    }
    navCheckPrev(props) {
        let q = ""
        if (this.props.data.next_url) {
            return <Link href={
                {
                    pathname: '/post',
                    query: {
                        b: this.props.data.next_url.substr(30, 4),
                        l: this.props.data.next_url.substr(35, 2),
                        o: this.props.data.next_url.substr(38, 2),
                        g: this.props.data.next_url.substr(41, this.props.data.next_url.length - 42)
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
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                            return <Link href={{
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
                            this.props.data.post.tags != "" ? this.props.data.post.tags.map(function(post, i){return <Link href={{pathname: '/tag',query: {s: post.slug}}}><a><i title={post.description}>@{post.slug}</i></a></Link>}) :  <i>(empty)</i>
                        }
                    </p>
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