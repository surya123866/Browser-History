import './index.css'

const DeleteHistory = props => {
  const {onDeleteHistory, HistoryListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryListItem

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="listContainer">
      <div className="resultItemsContainer">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        className="delete-btn"
        type="button"
        data-testid="delete"
        onClick={deleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="button-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default DeleteHistory
