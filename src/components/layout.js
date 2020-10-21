import React from "react"
import "./layout.scss"

import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children }) {
  return (
    <div>
      <div className="header px-5 py-3 mb-5">
        <h1 className="">Environmental Calculator</h1>
      </div>
      {children}
    </div>
  )
}
