import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import HeroHead from '../components/HeroHead'
import BlogPost from '../components/BlogPost'
import 'isomorphic-fetch'

export default class extends React.Component {

    static async getInitialProps({query : {s}}) {
        const ctch = await fetch(`http://localhost/wordpress/wp/tag/${s}/?json=1`)
        const data = await ctch.json()
        return { data }
    }

    titleCategory(props) {
        return `Tag: ${this.props.data.tag.title}`
    }

    render() {
        return(
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{`${this.titleCategory()} | Oshan Shrestha`}</title>
                    <link rel="stylesheet" href="static/build/styles/global.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="static/build/styles/post.css" />
                    <link rel="stylesheet" href="static/build/styles/cates.css" />
                </Head>
                <main>
                    <HeroHead fullName="Oshan Shrestha" slogan="A high-school graduate web developer" type={ this.titleCategory() } />
                    <div className="post-meta">
                        <p className="date-author"><FontAwesome className="sm-margin" name='file-text-o' />{this.props.data.tag.description}</p>
                        <p className="cates"><FontAwesome className="sm-margin" name='files-o' />{this.props.data.tag.post_count}</p>
                    </div>
                    {
                        this.props.data.posts.map(function(post, i) {
                            return <BlogPost key={i} slug={post.slug} title={post.title} content={post.excerpt} date={post.date.substring(0, 11)} category={post.categories} />
                        })
                    }
                </main>
            </div>
        )
    }
}