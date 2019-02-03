import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Components
import Header from './components/header'
import NewsList from './components/news_list'

// Resource Data Dummy
import JSON from './source/db.json.json'

class App extends Component {
  
  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1
    })
    this.setState({filtered})
  }

  render() {
    let filtered = this.state.filtered
    let news = this.state.news
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={filtered.length === 0 ? news : filtered} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
