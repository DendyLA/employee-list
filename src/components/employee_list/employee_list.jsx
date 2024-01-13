import EmployeeListItem from '../employee_list_item/employee_list_item'
import './employee_list.css'

const EmployeeList = () => {
    return(
        <ul className="app-list list-group">
            <EmployeeListItem/>
            <EmployeeListItem/>
            <EmployeeListItem/>
        </ul>
    )
}

export default EmployeeList;