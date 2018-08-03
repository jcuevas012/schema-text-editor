import React, { Component } from 'react'
import Paragraph from './Paragraph';

 class ParagraphList extends Component {
  
  render() {
       const { paragraphs, onDelete, onEdit } = this.props
    return (
      <div>
          <ul>
              {paragraphs && paragraphs.map((paragraph) => (
              <li key={paragraph.id}>
              <Paragraph  
                paragraph={paragraph}
                onDelete={onDelete}
                onEdit={onEdit}
              /> 
              </li>) )} 
        </ul>
      </div>
    )
  }
}


export default ParagraphList