import ItemList from "../itemList/layout";
import DoneList from "../doneList/layout";
import "./style.css";
const InputList = ({
  handleChange1,
  handleChange2,
  handleDelete,
  handleDeleteDone,
  handleDone,
  handleCancel,
  addNewTodo,
  todos,
  setTodos,
  doneTodos,
  newTodo,
  setNewTodo,
  newContext,
  setNewContext,
}) => {
  return (
    <div>
      <div className="inputList">
        <div className="row-static">
          <p>title : </p>
          <input className="input-group-text"
            style={{ width: "200px" }}
            tes="tes"
            value={newTodo}
            onChange={handleChange1}
          />
          <p>context :</p>
          <input className="input-group-text"
            style={{ width: "200px" }}
            value={newContext}
            onChange={handleChange2}
          />
          <button className="btn btn-primary" onClick={addNewTodo}>Add new to do</button>
        </div>
      </div>
      <h2>Working !!</h2>
      <div className="list-container">
        {todos.map((todo, index) => {
          return (
            <ItemList
              title={todo.title}
              context={todo.context}
              handleDelete={handleDelete}
              handleDone={handleDone}
              id={index}
              key={`todo-${todo.id}`}
            />
          );
        })}
      </div>
      <h2>Done !!</h2>
      <div className="list-container">
        {doneTodos.map((todo, index) => {
          return (
            <DoneList
              title={todo.title}
              context={todo.context}
              handleDeleteDone={handleDeleteDone}
              handleCancel={handleCancel}
              id={index}
              key={`todo-${todo.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputList;
