// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItems, deleteTodo} = props
  const {title, id} = todoItems

  const onDelete = () => {
    deleteTodo(id)
    console.log('delete btn clicked')
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>

      <button type="button" onClick={onDelete} className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
