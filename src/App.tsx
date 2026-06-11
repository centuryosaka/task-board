import { useState, useEffect } from 'react'
import './App.css'

type Task = {
  id: number
  text: string
  completed: boolean
}

const STORAGE_KEY = 'task-board-tasks'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTasks(prev => [...prev, { id: Date.now(), text: trimmed, completed: false }])
    setInput('')
  }

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="board">
      <h1 className="title">タスクボード</h1>

      <div className="input-area">
        <input
          className="task-input"
          type="text"
          placeholder="タスクを入力してください"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && (
          <li className="empty">タスクがありません</li>
        )}
        {tasks.map(task => (
          <li key={task.id} className={`task-item${task.completed ? ' completed' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
