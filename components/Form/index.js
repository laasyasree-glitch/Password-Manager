import {Component} from 'react'
import {v4} from 'uuid'
import FormItem from '../FormItem'
import './index.css'

class formFolder extends Component {
  state = {
    passwordList: [],
    websiteNameInput: '',
    userNameInput: '',
    passwordInput: '',
    showPassword: false,
    searchValue: '',
  }

  onChangeWebsiteNameInput = event => {
    this.setState({websiteNameInput: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  addItem = event => {
    event.preventDefault()
    const {
      websiteNameInput,
      userNameInput,
      passwordInput,
      showPassword,
    } = this.state

    const newItem = {
      id: v4(),
      websiteNameInput,
      userNameInput,
      passwordInput,
      showPassword,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newItem],
      websiteNameInput: '',
      userNameInput: '',
      passwordInput: '',
      showPassword: false,
    }))
  }

  toggleButton = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  filterList = () => {
    const {passwordList, searchValue} = this.state
    return passwordList.filter(eachPass =>
      eachPass.websiteNameInput
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    )
  }

  onPasswordSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  deleteItem = key => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachItem => eachItem.id !== key,
      ),
    }))
  }

  render() {
    const {text} = this.props
    const {
      passwordList,
      websiteNameInput,
      userNameInput,
      passwordInput,
      showPassword,
      searchValue,
    } = this.state

    const filterListOfSearch = this.filterList()

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card">
          <form className="formCard">
            <h1>{text}</h1>
            <div className="card-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="image-1"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter website"
                value={websiteNameInput}
                onChange={this.onChangeWebsiteNameInput}
              />
            </div>
            <div className="card-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="image-1"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter UserName"
                value={userNameInput}
                onChange={this.onChangeUserNameInput}
              />
            </div>
            <div className="card-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="image-1"
              />

              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            </div>
            <button className="button" type="submit" onClick={this.addItem}>
              Add
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image"
            />
          </div>
        </div>
        <div className="display-card">
          <div className="password-section">
            <div className="your-password">
              <h1 className="head">Your Passwords</h1>
              <p className="count">{passwordList.length}</p>
            </div>
            <div>
              <div className="card-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="image-1"
                />
                <input
                  value={searchValue}
                  className="input"
                  type="search"
                  placeholder="Search"
                  onChange={this.onPasswordSearch}
                />
              </div>
            </div>
          </div>
          <hr className="line" />
          <div className="show">
            <label htmlFor="toggle" className="head">
              Show Passwords
            </label>
            <input type="checkbox" id="toggle" onChange={this.toggleButton} />
          </div>
          {filterListOfSearch.length === 0 ? (
            <div className="card">
              <img
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="image-no"
              />
            </div>
          ) : (
            <ul className="appointments-list">
              {filterListOfSearch.map(eachItem => (
                <FormItem
                  ItemDetails={eachItem}
                  showPassword={showPassword}
                  key={eachItem.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default formFolder
