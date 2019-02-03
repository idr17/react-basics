import React from 'react'

const NewsListItem = ({item}) => {
  return (
    <div className="eachItem">
      <h3>{ item.title }</h3>
      <div>{ item.feed }</div>
    </div>
  )
}

export default NewsListItem
