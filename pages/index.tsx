import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HabitHub</title>
        <meta name="description" content="GitHub style habit tracker." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="flex items-center justify-center h-screen w-full">HabitHub</h1>
    </div>
  )
}

export default Home
