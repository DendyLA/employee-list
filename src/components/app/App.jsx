import './app.css'

import AppInfo from '../app_info/app_info'
import SearchPanel from '../search_panel/search_panel'
import AppFilter from '../app_filter/app_filter'
import EmployeeList from "../employee_list/employee_list"
import EmployeeAddForm from '../employee_add_form/employee_add_form'

function App() {

  return (
    <div className="app">
      <AppInfo/>

      <div className="search_panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeeList/>
      <EmployeeAddForm/>
    </div>
  )
}

export default App
