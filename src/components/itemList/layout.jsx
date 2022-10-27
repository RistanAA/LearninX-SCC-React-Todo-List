import './style.css'
const ItemList = ({ title, context, handleDelete, handleDone, id }) => {
    // console.log('id = '+id)
    return (
      <div className="working-list">
        <p>{title}</p>
        <p>{context}</p>
        <span onClick={handleDelete} id={id}  className="btn btn-outline-danger" style={{'marginRight':'10px'}} >delete</span>
        <span className="btn btn-outline-success" onClick={handleDone} id={id}>done</span>
      </div>
    )
}

export default ItemList;