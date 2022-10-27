import './style.css'
const Header = () => {
    return (
      <div className="header">
        <div className="row">
          <div className="col-6">
          <span className="align-middle">My Todo List</span>
          </div>
          <div className="col-6">
          <p style={{ 'textAlign': 'right' }}>React</p>
          </div>
        </div>
      </div>
    )
}

export default Header;