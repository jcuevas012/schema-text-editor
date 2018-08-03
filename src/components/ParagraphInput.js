import React, { Component } from 'react'
import { debug } from 'util';

class ParagraphInput extends Component {


    constructor(props) {
        super(props)
        this.state = {
            currentParagraph: {},
            text: '',
            bold: false,
            italic: false
        }
        this.onChange = this.onChange.bind(this)
        this.combinationKey = this.combinationKey.bind(this)
        this.addParagraph = this.addParagraph.bind(this)
    }

    onChange(e) {
        const { name, value } = e.target
        value.length > 1000 && alert(' Invalid paragraph, The paragraph is longer that 1000 ')
        this.setState({ [name]: value })
    }

    addParagraph(e) {
        if (e.key == 'Enter') {
            this.props.addParagraph({
                text: this.state.text,
                bold: this.state.bold,
                italic: this.state.italic
             })
            this.setState({ text: '' , bold: false, italic: false })
        }


    }



    combinationKey(e) {
        if (e.ctrlKey || e.keyCode == 66) {
            this.setState({ bold: !this.state.bold })
            this.state.currentParagraph.id && this.props.paragraphBold(this.currentParagraph.id)
        }

        if (e.ctrlKey || e.keyCode == 73) {
            this.setState({ italic: !this.state.italic })
            this.state.currentParagraph.id && this.props.paragraphItalic(this.currentParagraph.id)
        }

    }

    componentDidMount(){
        this.setState({ currentParagraph: this.props.currentParagraph })
    }

    render() {
        
        return (
            <form>
                <textarea
                    name="text"
                    id="text"
                    cols="30"
                    rows="10"
                    className={`${this.state.bold && 'bold_paragraph'}  ${this.state.italic && 'italic_paragraph'}  `}
                    value={this.state.text}
                    onChange={this.onChange}
                    onKeyPress={this.addParagraph}
                    onKeyDown={this.combinationKey}
                    placeholder="type your idea here ..." ></textarea>
            </form>
        )
    }
}


export default ParagraphInput