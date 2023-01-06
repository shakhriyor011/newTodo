import React, { useState } from 'react'
import SvgIcons from '../../assets/icons/SvgIcons'
import ToDoModal from '../ToDoModal/ToDoModal'

import './ListItem.scss'

const ListItem = ({ gridToList, todo, removeTodo, editTodo }) => {
    const { title, content, date, id } = todo
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(title)
    const [editContent, setEditContent] = useState(content)

    const handleEdit = () => {
        setEdit(true)
    }

    const handleClose = () => {
        setEdit(false)
    }

    const handleEditTodoClose = () => {
        if (editTitle && editContent) {
            editTodo(id, editTitle, editContent)
            setEdit(false)
            setEditTitle(editTitle)
            setEditContent(editContent)
        } else {
            alert('Заполните все поля')
        }
    }



    return (
        /* react fragment */
        <>
            <div className='list'>
                <div className={gridToList ? 'list__wrapper active' : 'list__wrapper'}>
                    <h2 className="list__title">{title}</h2>
                    <p className="list__date">{date}</p>
                </div>
                <p className="list__description">{content}</p>
                <div className="list__btns">
                    <button onClick={handleEdit}>
                        <SvgIcons id='pencil' />
                        РЕДАКТИРОВАТЬ
                    </button>
                    <button onClick={() => removeTodo(id)}>
                        <SvgIcons id='trash' />
                        Удалить
                    </button>
                </div>
            </div>
            <ToDoModal
                text='Изменить'
                openModal={edit}
                close={handleClose}
                title={editTitle}
                setTitle={setEditTitle}
                content={editContent}
                setContent={setEditContent}
                handleBtn={handleEditTodoClose}
            />
        </>

    )
}

export default ListItem