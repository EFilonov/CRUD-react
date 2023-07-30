import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {name: "Zhek" ,salary: 4500, increase: 0, id: 1},
  {name: "Kolya" ,salary: 1500, increase: 0, id: 2},
  {name: "Slava" ,salary: 2500, increase: 0, id: 3}
]

function App() {
  return (
    <div className="app">
        <AppInfo/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
