import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [
        {name: "Zhek" ,salary: 4500, increase: false, approved: true, id: 1},
        {name: "Kolya" ,salary: 1500, increase: true, approved: false, id: 2},
        {name: "Slava" ,salary: 2500, increase: false, approved: false, id: 3}
        ]
      } 
    this.getMaxId = () => {
      const idArr = this.state.data.map(item => item.id);
      return Math.max.apply(null, idArr);
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => { 
      return {data: data.filter(item => item.id !== id)}
    }) 
  }

  addPerson = (name, salary) =>{
    console.log(this.getMaxId());
    const newItem = [{
      name, 
      salary,
      increase: false,
      approved: false,
      id: this.getMaxId() + 1
    }]
    if (name&&salary) {
      this.setState(({data}) => {
          const newArr = [...data, ...newItem];
          return {
              data: newArr
          }
      });
    }
  }

  onTogglePromotion = (id) => {
    this.setState(({data}) => ({
      data :data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item

       })
    }))
  }

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data :data.map(item => {
        if (item.id === id) {
          return {...item, approved: !item.approved}
        }
        return item

       })
    }))
  }

  getEmploeeCount = () => {
    return this.state.data.length
  }  

  getPromotedCount = () => {
    const promotedArr = this.state.data.filter(item => item.increase === true)
    return promotedArr.length
  }


  render () {
    return (
      <div className="app">
          <AppInfo
          emploeeCount = {this.getEmploeeCount}
          promotedCount = {this.getPromotedCount}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete = {this.deleteItem}
            onToggleRise = {this.onToggleRise}
            onTogglePromotion = {this.onTogglePromotion}
            />
          <EmployeesAddForm onAdd = {this.addPerson} />
      </div>
    );
  }
}

export default App; 