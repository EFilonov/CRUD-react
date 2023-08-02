import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
    super(props)
    this.state = {
        searchMask:''
    }
    } 

    onUpdeteSearch = (e) => {
        const mask = e.target.value;
        this.setState({searchMask: mask})
        this.props.onUpdeteSearch(mask)
    }

    render () {
        const {inputed} = this.state
        return (
            <input  
                    onChange={this.onUpdeteSearch}
                    type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value = {inputed}
                    />
        )           
    }
}

export default SearchPanel;