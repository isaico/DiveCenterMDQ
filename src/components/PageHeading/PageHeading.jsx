import React from 'react'
import PageHeadingText from './PageHeadingText'

const PageHeading = (props) => {
  return (
    <div className="flex justify-center items-center my-5">
        <props.icon  className="page-heading-icon" ></props.icon>
        <PageHeadingText text={props.text}/>
    </div>
  )
}

export default PageHeading