import React, { Component } from 'react'


function Paragraph (props) {

    let { paragraph, onDelete, onEdit } = props

    return (
      <div>
        <p className={ `${paragraph.bold && 'bold_paragraph'} ${paragraph.italic && 'italic_paragraph'}` }>
            {paragraph.text}
        </p>        
        <button onClick={() => onDelete(paragraph.id)}  className="delete" >Delete</button>
        <button onClick={onEdit} className="edit" >Edit</button>
      </div>
    )

}


export default Paragraph