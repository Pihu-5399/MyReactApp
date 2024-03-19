import React, { useState } from 'react'
import EditModal from './EditModal'

function TaskDisplay({ tasks, dispatch }) {
  const[isModal, setIsModal] = useState(false)

  const editHandeler =()=>{
    setIsModal(true)
  }

  return (
    <>
      <div className="container">
        {
          tasks.map((e,i) => {
            return (
              <div className="card">
                <h3>{e}</h3>
                <div className="buttons">
                  <button onClick={()=>dispatch({type:"delete", payload:i})}>
                    Delete</button>
                  <button onClick={editHandeler}>
                    Edit</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        {isModal && <EditModal></EditModal>}     
      </div>
    </>
  )
}

export default TaskDisplay