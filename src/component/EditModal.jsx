import React from 'react'

const EditModal = () => {
    return (
        <>
        <div className="modal-container">
        <div className="modal">
                <h2>Edit Your Task</h2>
                <textarea name="" id="" cols="30" rows="4"></textarea>
                <div className='modal-buttons'>
                    <button>Update Task</button>
                    <button>Close</button>
                </div>
                <h2 className='cross'>X</h2>
            </div>
        </div>
            
        </>
    )
}

export default EditModal