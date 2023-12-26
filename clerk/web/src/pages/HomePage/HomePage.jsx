// web/src/pages/HomePage/HomePage.js

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  // Destructuring properties from the useAuth hook
  const { isAuthenticated, signUp, logOut } = useAuth()

  return (
    <>
      {/* MetaTags component for managing meta tags */}
      <MetaTags
        title="Home"
        // Add other meta tags as needed
      />

      {/* Displaying authentication status */}
      <p>{JSON.stringify({ isAuthenticated })}</p>

      {/* Button to trigger the sign-up function */}
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logOut}>Logout</button>
    </>
  )
}

export default HomePage
