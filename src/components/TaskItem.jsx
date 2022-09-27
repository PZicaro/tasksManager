import { AiFillDelete } from 'react-icons/ai'
import { useAlert } from 'react-alert'
import axios from 'axios'

import './TaskItem.scss'

export const TaskItem = ({ task, fetchTask }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_API_URL}/${task._id}`)

      fetchTask()

      alert.success('A tarefa foi removida com sucesso :)')
    } catch (_error) {
      alert.error('Algo deu errado na deleção de sua tarefa :(')
    }
  }
  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(`${import.meta.env.VITE_APP_API_URL}/${task._id}`, {
        isCompleted: e.target.checked
      })

      await fetchTask()

      alert.success('A tarefa foi modificada com sucesso')
    } catch (_error) {
      alert.error('Algo deu errado')
    }
  }

  return (
        <div className="task-item-container">
            <div className="task-description">
                <label className={
                    task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'
                }>
                    {task.description}
                    <input type='checkbox' defaultChecked={task.isCompleted} onChange={(e) => handleTaskCompletionChange(e)}></input>
                    <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'}></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete onClick={handleTaskDeletion} size={18} color='#F97474'/>
            </div>
        </div>
  )
}
