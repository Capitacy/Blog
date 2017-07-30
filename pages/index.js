import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeroHead from '../components/HeroHead'
import Head from 'next/head'

export default class extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <title>Blog - Oshan Shrestha</title>
                    <link rel="stylesheet" href="static/build/styles/global.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />                    
                </Head>
                <main>
                    <HeroHead fullName="Oshan Shrestha" slogan="A high-school graduate web developer." />
                    <h2>Blog</h2>
                </main>
            </div>
        )
    }
}