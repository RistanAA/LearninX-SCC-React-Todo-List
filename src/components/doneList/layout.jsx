import './style.css'
const DoneList = ({ title, context, handleDeleteDone, handleCancel, id }) => {
    // console.log('id = '+id)
    return (
      <div className="done-list">
        <p>{title}</p>
        <p>{context}</p>
        <span onClick={handleDeleteDone} id={id}  className="btn btn-outline-danger" style={{'marginRight':'10px'}} >delete</span>
        <span className="btn btn-outline-primary" onClick={handleCancel} id={id}>Cancel</span>
      </div>
    )
}

export default DoneList;