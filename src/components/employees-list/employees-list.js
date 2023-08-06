import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';



class EmployeesList extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
   
    

    render () {
    const {data, onDelete, onTogglePromotion, onToggleRise, onChangeSalary, onEditSalary} = this.props;
    const emploeesItems = data.map(item =>{ 
        const {id, ...emploeeData} = item;
        return(
        //    <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/> 
           <EmployeesListItem
             key = {id} 
             {...emploeeData}
             onDelete = {() => {onDelete(id)}}
             onTogglePromotion = {() => onTogglePromotion(id)}
             onToggleRise = {() => onToggleRise(id)} 
             onChangeSalary = {() => onChangeSalary(id)}
             dataId = {id}
             onEditSalary = {onEditSalary}
             /> 
        )
        
    })
    
    return (
        <ul className="app-list list-group">
            {emploeesItems}
        </ul>
    )
    }
    
}

export default EmployeesList;