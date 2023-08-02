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
        {name: "Zhek" ,salary: 100500, increase: false, approved: false, id: 1},
        {name: "Ksyushmel" ,salary: 2500, increase: false, approved: false, id: 2},
        {name: "Slava" ,salary: 1500, increase: false, approved: false, id: 3}
        ],
        searchMask:''
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
    this.setState(({data}) => {
      return {data :data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item
      })}
    })
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

  onSearch = (items, searchMask) => {
    if (searchMask.length === 0) {
      return items
  }

    return items.filter(item => {
      return item.name.indexOf(searchMask) !== -1
  })
}
onUpdeteSearch = (searchMask) =>{
  this.setState({searchMask})
} 

  render () {
    const {data, searchMask} = this.state;
    const visibleByMask = this.onSearch(data, searchMask);

    return (
      <div className="app">

          <AppInfo
            emploeeCount = {this.getEmploeeCount}
            promotedCount = {this.getPromotedCount}/>
  
          <div className="search-panel">
            <SearchPanel
            onUpdeteSearch = {this.onUpdeteSearch} />

            <AppFilter/>
          </div>
          
          <EmployeesList 
            data={visibleByMask}
            onDelete = {this.deleteItem}
            onToggleRise = {this.onToggleRise}
            onTogglePromotion = {this.onTogglePromotion} />
          
          <EmployeesAddForm onAdd = {this.addPerson} />
      </div>
    );
  }
}

export default App; 