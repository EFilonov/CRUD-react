import { Component } from 'react';

import './employees-list-item.css';

 class EmployeesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    onEditSalary = (e) =>{
        e.preventDefault();
        this.props.onEditSalary(e.target.dataset.id, e.target.value.replace(/\D/g,''))   
    }
    
    render () {
    const {name, salary, onTogglePromotion, onToggleRise, onDelete, increase, approved, dataId} = this.props;
    let liClasses = 'list-group-item d-flex justify-content-between';
    
    if (increase) {liClasses += ' increase'};
    if (approved) {liClasses += ' like'}
    
        return (
            <li className={liClasses}>
                <span onClick={onToggleRise}
                className="list-group-item-label ">{name}
                </span>
                <input type="text"
                onChange={this.onEditSalary} 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                name='salary'
                data-id = {dataId}
                // value={salary}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        onClick={onTogglePromotion} 
                        type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete} >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i> 
                </div>
            </li>
        )
    }   
}

export default EmployeesListItem;