import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators } from 'redux'
import ParagraphInput from './ParagraphInput'
import ParagraphList from './ParagraphList';
import {addParagraph, paragraphBold, paragraphItalic, deleteParagraph} from '../actions/paragrahp'
import { debug } from 'util';
 class Document extends Component {

    
    render() {
        const { paragraphs } = this.props
        
        return (
            <div id="document">
                <h3>Schema Text Editor</h3>
                <ParagraphInput 
                addParagraph={this.props.addParagraph}
                paragraphBold={this.props.paragraphBold}
                paragraphItalic={this.props.paragraphItalic}
                />
                <ParagraphList 
                paragraphs={paragraphs}
                onDelete={this.props.deleteParagraph}
                />
            </div>   
        )
    }
}



function mapDispatchToProps (dispatch) {
    return {
        addParagraph: content => dispatch(addParagraph(content)),
        deleteParagraph: id => dispatch(deleteParagraph({ id })),
        paragraphBold: id => dispatch(paragraphBold(id)),
        paragraphItalic: id => dispatch(paragraphItalic(id)),
    }
}

function mapStateToProps (state) {
    return {
        paragraphs: state.paragraph.paragraphs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Document)