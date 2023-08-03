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
        {name: "Zhek" ,salary: 100500, increase: true, approved: false, id: 1},
        {name: "Ksyushmel" ,salary: 500, increase: false, approved: false, id: 2},
        {name: "Slava" ,salary: 1500, increase: true, approved: false, id: 3}
        ],
        searchMask:'',
        filter:'all'
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
          return {data: newArr}
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

swithFilter = (items, filter) => { 
  switch (filter) {
    case 'increase': return items.filter(item => item.increase);
    case 'more1000': return items.filter(item => item.salary > 1000);
    default: return items
  };
}

onFilterSelect = (filter) => {
  this.setState({filter})
}

  render () {
    const {data, searchMask, filter} = this.state;
    const visibleByMask = this.swithFilter(this.onSearch(data, searchMask), filter);

    return (
      <div className="app">

          <AppInfo
            emploeeCount = {this.getEmploeeCount}
            promotedCount = {this.getPromotedCount}/>
  
          <div className="search-panel">
            <SearchPanel
              onUpdeteSearch = {this.onUpdeteSearch} />
            <AppFilter
               filter = {filter}
               onFilterSelect = {this.onFilterSelect}
              />
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