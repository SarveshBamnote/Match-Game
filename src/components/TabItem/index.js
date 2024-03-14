import './index.css'

const TabItem = props => {
  const {eachTab, setActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabBtn = () => {
    setActiveTabId(tabId)
  }

  const buttonClassName = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="tab-list-item">
      <button className={buttonClassName} onClick={onClickTabBtn} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
