import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectToDatabase } from "../../../util/mongodb"

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        //console.log("Enter the function.")
        const { db } = await connectToDatabase()
        //console.log("Successful connection to database.")
        const user = await db.collection("User").findOne(
          { username: credentials.username},
          {
            username: 1,
            password: 1,
          })
        //console.log("Successful get user")
        if (!user) {
        //cannot find an existing user with the typed in username
        //console.log("cannot find user in database")
        return Promise.resolve(null)
        } 
        else {
          //console.log(`user: ${user}`)
          //console.log(`credentials_password: ${credentials.password}`)
          //console.log(`database_password: ${user.password}`)
          // check password if exist
          if (credentials.password === user.password){
            //console.log(`password: ${credentials.password}`)
            //console.log(`user: ${JSON.stringify(user)}`)
            return Promise.resolve(user)
          } 
          else {
            //console.log(`password: ${credentials.password}`)
            return Promise.resolve(null)
          }
        }
      },
    })
  ],
  
  // database: process.env.DATABASE_URL, 

  callbacks:{
    session: async (session, user) => {
      session.user.email= user.user.username
      session.user.name = user.user.nickname
      session.user.image = null
      //console.log(`session_session: ${JSON.stringify(session)}`)
      //console.log(`session_user: ${JSON.stringify(user)}`)
      //console.log(`session_Token: ${JSON.stringify(sessionToken)}`)
      // session.user = {email: session.user.email, name:session.user.name, image: null}
      return Promise.resolve(session)
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      if (user) {token.user = user}
      //console.log(`jwt_token: ${JSON.stringify(token)}`)
      //console.log(`jwt_profile: ${JSON.stringify(profile)}`)      
      //console.log(`jwt_account: ${JSON.stringify(account)}`)      
      //console.log(`jwt_user: ${JSON.stringify(user)}`)
      return Promise.resolve(token)
    }
  }
  // session: {
  //   jwt = true
    
  // }
  // jwt {
  //   signingKey: process.env.SECRET,
  // },
  //database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
/*
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    // jwt: true,
    
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw', 
    
    // Set to true to use encryption (default: false)
    // encryption: true,

    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks 
  callbacks: { 
    // signIn: async (user, account, profile) => { return Promise.resolve(true) },
    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
    // session: async (session, user) => { return Promise.resolve(session) },
    // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: { },

  // Enable debug messages in the console if you are having problems
  debug: false,
}*/