import './app.css'
import { Component } from 'react'
import AppInfo from '../app_info/app_info'
import SearchPanel from '../search_panel/search_panel'
import AppFilter from '../app_filter/app_filter'
import EmployeeList from "../employee_list/employee_list"
import EmployeeAddForm from '../employee_add_form/employee_add_form'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : 
            [
                {name: "John Smith", salary: 500, increase: true, rise: false, id : 1},
                {name: "Alex Lebron", salary: 800, increase: false, rise: false, id : 2},
                {name: "Lona Sammi", salary: 300, increase: false, rise: false, id : 3},
                {name: "Dan Mich", salary: 1000, increase: true, rise: false, id : 4}
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(i => i.id != id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }



    render(){
        const employee = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
            <AppInfo
                employee = {employee}
                increased = {increased}
            />
    
            <div className="search_panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
    
            <EmployeeList 
            employeeData = {this.state.data}
            onDelete = {this.deleteItem}
            onToggleProp = {this.onToggleProp}
            />
            <EmployeeAddForm onAdd = {this.addItem}/>
            </div>
        )
    }
    
    }

export default App
