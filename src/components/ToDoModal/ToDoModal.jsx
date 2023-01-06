import React from 'react'

import './ToDoModal.scss'

const ToDoModal = ({
    text,
    openModal,
    close,
    title,
    setTitle,
    content,
    setContent,
    handleBtn
}) => {

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className={openModal ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <h2 className="modal__title">{text} заметку</h2>
                <form action="" className="modal__form">
                    <div className="modal__group">
                        <input onChange={onChangeTitle} value={title} type="text" required />
                        <span></span>
                        <label>Title</label>
                    </div>
                    <div className="modal__group">
                        <input onChange={onChangeContent} value={content} type="text" required />
                        <span></span>
                        <label>Content</label>
                    </div>
                    <div className="modal__btns">
                        <button onClick={close}>Отмена</button>
                        <button onClick={handleBtn}>{text}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ToDoModal