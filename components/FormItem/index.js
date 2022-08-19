import './index.css'

const FormItem = props => {
  const {ItemDetails, showPassword, deleteItem} = props
  const {id, websiteNameInput, userNameInput, passwordInput} = ItemDetails

  const password = showPassword ? (
    <p className="pass">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  const Delete = () => {
    deleteItem(id)
  }

  return (
    <li className="list">
      <div className="content">
        <p className="add-on">{websiteNameInput}</p>
        <p className="add-on">{userNameInput}</p>
        {password}
      </div>

      <button type="button" testid="delete" className="delete">
        <img
          onClick={Delete}
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        />
      </button>
    </li>
  )
}

export default FormItem
