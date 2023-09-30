import './index.css'

const TabItem = props => {
  const {tabDetails, updateStateId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClass = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateStateId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
