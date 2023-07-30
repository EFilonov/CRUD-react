import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';



const EmployeesList = ({data}) => {

    const emploeesItems = data.map(item =>{
        const {id, ...emploeeData} = item;
        return(
        //    <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/> 
           <EmployeesListItem key = {id} {...emploeeData} /> 
        )
        
    })
    
    return (
        <ul className="app-list list-group">
            {emploeesItems}
        </ul>
    )
    
}

export default EmployeesList;