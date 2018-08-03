import { dispatch } from 'redux'

export const ADD_PARAGRAPH = 'ADD_PARAGRAPH'
export const PARAGRAPH_BOLD = 'PARAGRAPH_BOLD'
export const PARAGRAPH_ITALIC = 'PARAGRAPH_ITALIC'
export const SET_CURRENT_PARAGRAPH = 'SET_CURRENT_PARAGRAPH'
export const DELETE_PARAGRAPH = 'DELETE_PARAGRAPH'

export function addParagraph(data) {

   return {
        type: ADD_PARAGRAPH,
        payload: data
    }
}

export function deleteParagraph(data) {

    return {
         type: DELETE_PARAGRAPH,
         payload: data
     }
 }
 
 
 


export function paragraphBold(data) {

    return {
         type: PARAGRAPH_BOLD,
         payload: data
     }
 }
 

 export function paragraphItalic(data) {

    return {
         type: PARAGRAPH_ITALIC,
         payload: data
     }
 }


 export function setCurrentParagraph(data) {

    return {
         type: SET_CURRENT_PARAGRAPH,
         payload: data
     }
 }