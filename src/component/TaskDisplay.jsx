import React from 'react'

function TaskDisplay({ tasks, dispatch }) {

  return (
    <>
      <div className="container">
        {
          tasks.map(e => {
            return (
              <div className="card">
                <h3>{e}</h3>
                <div className="buttons">
                  <button>Delete</button>
                  <button>Edit</button>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default TaskDisplay