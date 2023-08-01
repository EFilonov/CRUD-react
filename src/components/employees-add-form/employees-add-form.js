import './employees-add-form.css';
import { Component } from 'react';

// const EmployeesAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
// }
class EmployeesAddForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    valueChange = (e) =>{
        e.preventDefault();
        this.setState( () => {
            return  {[e.target.name]: e.target.value} 
        })
    }
    
    addPerson = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
        
    }
    
    render () {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.addPerson}
                    className="add-form d-flex">
                    <input onChange={this.valueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name = "name"
                        value ={name} 
                    />
                    <input onChange={this.valueChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="ЗП $"
                        name = "salary"
                        value ={salary} 
                    /> 
                    <button type="submit"
                        className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;