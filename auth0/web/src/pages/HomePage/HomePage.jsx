// web/src/pages/HomePage/HomePage.js

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()

  return (
    <>
      <MetaTags
        title="Home"
        // Add other meta tags as needed
      />
      <h1>Welcome to the Home Page</h1>
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button onClick={signUp}>Sign Up</button>
    </>
  )
}

export default HomePage
