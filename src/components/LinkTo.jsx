import React from 'react'
import { Link } from 'react-router-dom'

const LinkTo = (props) => {
  return (
    <Link to={props.to} className={props.className}>{props.text}</Link>
  )
}

export default LinkTo