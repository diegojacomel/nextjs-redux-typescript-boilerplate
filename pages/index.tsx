// React
import React from 'react'

// Next
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div data-testid="home">
      <Head>
        <title>AnubisNetwork - Phishing</title>
        <meta name="description" content="AnubisNetwork - Phishing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home
    </div>
  )
}

export default Home
