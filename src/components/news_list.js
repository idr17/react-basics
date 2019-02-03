import React from 'react'

// Child Component
import NewsListItem from "./news_list_item"

const NewsList = (props) => {

  const news_item = props.news.map(item => {
    return (
      <NewsListItem key={item.id} item={item} />
    )
  })

  return (
    <div>
      <h1>News List</h1>
      { news_item }
    </div>
  )
  
}

export default NewsList
