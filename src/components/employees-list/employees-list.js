import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';



const EmployeesList = ({data, onDelete, onTogglePromotion, onToggleRise}) => {

    const emploeesItems = data.map(item =>{
        const {id, ...emploeeData} = item;
        return(
        //    <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/> 
           <EmployeesListItem
             key = {id} 
             {...emploeeData}
             onDelete = {() => {onDelete(id)}}
             onTogglePromotion = {() => onTogglePromotion(id)}
             onToggleRise = {() => onToggleRise(id)} /> 
        )
        
    })
    
    return (
        <ul className="app-list list-group">
            {emploeesItems}
        </ul>
    )
    
}

export default EmployeesList;