import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useAlert } from 'react-alert'
import axios from 'axios'

import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'

import './addTask.scss'

export const AddTask = ({ fetchTask }) => {
  const [taskItem, setTaskItem] = useState('')

  const alert = useAlert()

  const handleChangeInput = (e) => {
    setTaskItem(e.target.value)
  }
  const handleTaskAddition = async () => {
    try {
      if (taskItem.length === 0) {
        return alert.error('A tarefa precisa de uma descrição para ser adicionada.')
      }
      await axios.post('https://fsc-task-manager-backend.herokuapp.com/tasks', {
        description: taskItem,
        isCompleted: false
      })
      await fetchTask()
      setTaskItem('')

      alert.success('Sua tarefa foi Adicionada :)')
    } catch (_error) {
      alert.error('Ops... Aparentemente algo deu errado')
    }
  }
  return (
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa..." value={taskItem} onChange={handleChangeInput} onEnterPress={handleTaskAddition}/>
            <CustomButton onClick={handleTaskAddition}><FaPlus size={14} color="#fffff"/></CustomButton>
        </div>
  )
}
