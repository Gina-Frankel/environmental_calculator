import React from "react"

import Layout from "../components/layout"
import LandingPage from "../components/landingPage"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <LandingPage></LandingPage>
      </div>
    </Layout>
  )
}
