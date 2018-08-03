
import { ADD_PARAGRAPH, PARAGRAPH_BOLD, PARAGRAPH_ITALIC, SET_CURRENT_PARAGRAPH, DELETE_PARAGRAPH } from '../actions/paragrahp'

const initialState = {
    paragraphs: [],
    currentParagraph: {}
}

export default function paragraph(state = initialState, action) {
    switch (action.type) {

        case ADD_PARAGRAPH:

            const paragraph = {
                id: state.paragraphs.length + 1,
                text: action.payload.text,
                bold: action.payload.bold,
                italic: action.payload.italic
            }

            return {
                paragraphs: [...state.paragraphs, paragraph]
            }

        case DELETE_PARAGRAPH:
            let paragraphs = state.paragraphs
            let p = paragraphs.find(p => p.id == action.payload.id)
            const index = paragraphs.indexOf(p)
            
            paragraphs = paragraphs.splice(index, 1)
            return {
                paragraphs
            }

        case PARAGRAPH_BOLD:

            paragraphs = [...state.paragraphs]
            let paragr = paragraphs.find(p => p.id === action.payload.id)
            let i = state.paragraphs.indexOf(paragr)
            paragr.bold = true
            paragraphs[index] = paragr

            return {
                paragraphs
            }

        case PARAGRAPH_ITALIC:
        // let paragraphs = [...state.paragraphs]
        // let paragr = paragraphs.find(p => p.id === action.payload.id)
        // let index = state.paragraphs.indexOf(paragraph)

        // paragr.italic = true
        // paragraphs[index] = paragr

        // return {
        //      paragraphs 
        // }


        case SET_CURRENT_PARAGRAPH:
            return {

                currentParagraph: action.payload
            }


        default:
            return state
    }

}
