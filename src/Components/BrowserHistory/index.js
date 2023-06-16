import {Component} from 'react'
import './index.css'

import DeleteHistory from '../DeleteHistory'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.filterHistoryList()

    return (
      <div className="App-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              className="input"
              placeholder="search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        {filteredHistoryList.length !== 0 ? (
          <ul className="history-container">
            {filteredHistoryList.map(eachHistory => (
              <DeleteHistory
                onDeleteHistory={this.onDeleteHistory}
                HistoryListItem={eachHistory}
                key={eachHistory.id}
              />
            ))}
          </ul>
        ) : (
          <p className="noHistory">There is no history to show</p>
        )}
      </div>
    )
  }
}

export default BrowserHistory
