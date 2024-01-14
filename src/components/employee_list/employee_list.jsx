/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import EmployeeListItem from '../employee_list_item/employee_list_item'
import './employee_list.css'

const EmployeeList = ({employeeData}) => {

    const elements = employeeData.map(item => {
        return(
            <EmployeeListItem {...item}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeeList;