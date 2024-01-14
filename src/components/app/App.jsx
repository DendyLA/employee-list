import './app.css'

import AppInfo from '../app_info/app_info'
import SearchPanel from '../search_panel/search_panel'
import AppFilter from '../app_filter/app_filter'
import EmployeeList from "../employee_list/employee_list"
import EmployeeAddForm from '../employee_add_form/employee_add_form'

function App() {
    const data =[{
        name: "John Smith", salary: 500, bonus: true},
        {name: "Alex Lebron", salary: 800, bonus: false},
        {name: "Lona Sammi", salary: 300, bonus: false},
        {name: "Dan Mich", salary: 1000, bonus: true}
    ]

    return (
        <div className="app">
        <AppInfo/>

        <div className="search_panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeeList employeeData = {data}/>
        <EmployeeAddForm/>
    т    </div>
    )
    }

export default App
