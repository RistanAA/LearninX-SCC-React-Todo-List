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
      <div className="add-form">
        <div className="input-group1">
          <label className="form-label1">title : </label>
          <input className="add-input input-body"
            style={{ width: "200px" }}
            tes="tes"
            value={newTodo}
            onChange={handleChange1}
          />
          <label className="form-label1">context :</label>
          <input className="add-input input-body"
            style={{ width: "200px" }}
            value={newContext}
            onChange={handleChange2}
          />
        </div>
          <button className="add-button" onClick={addNewTodo}>Add new to do</button>
      </div>
      <h2>Working.. 🔥</h2>
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
      <h2>Done..! 🎉</h2>
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
