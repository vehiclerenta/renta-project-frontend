import React from 'react'
import Header from "components/Header/Header.jsx"

function main(props) {
  return (
    <div><Header/>{props.children}</div>
  )
}

export default main