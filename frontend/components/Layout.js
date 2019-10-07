import React, { Component } from 'react'
import Head from "next/head";
import Navbar from './Navbar'
export class Layout extends Component {
    render() {
        return (
            <main>
                <Head>
                    <title>AIRIA</title>
                </Head>
                <Navbar />
            </main>
        )
    }
}

export default Layout
