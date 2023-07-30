import './employees-list-item.css';
import { Component } from 'react';

// const EmployeesListItem = ({name, salary, increase}) => {
    
//     let liClasses = 'list-group-item d-flex justify-content-between';

//     if (increase){
//         liClasses += ' increase'}
   

//     return (
//         <li className={liClasses}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i> 
//             </div>
//         </li>
//     )
// }

class EmployeesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

setPromotion = () => {
    this.setState(({increase}) => {
        return {increase: !increase}
    })
}

setLike = () => {
    this.setState(({like}) => {
        return {like: !like}
    })
}


    render = () => {
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        let liClasses = 'list-group-item d-flex justify-content-between';
        
        if (increase){liClasses += ' increase'};
        if (like) {liClasses += ' like'}
        
        return (
            <li className={liClasses}>
                <span onClick={this.setLike}
                className="list-group-item-label ">{name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        onClick={this.setPromotion} 
                        type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i> 
                </div>
            </li>
        )
                 
    }
    
}

export default EmployeesListItem;