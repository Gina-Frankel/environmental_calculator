import React from "react"
import Layout from "../components/layout"
import cottonImage from "../../static/cotton.jpg"
import tShirtImage from "../../static/t-shirt.jpg"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <h1 className="mb-5">Cotton</h1>
        <div className="row">
          <div className="col-lg-5 col-md-3">
            <img
              src={cottonImage}
              className="img-fluid"
              alt="cotton-field"
            ></img>
          </div>
          <div className=" offset-lg-2 col-lg-5 col-md-3">
            <img src={tShirtImage} className="img-fluid" alt="t-shirt"></img>
          </div>
        </div>
      </div>
    </Layout>
  )
}
