import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)