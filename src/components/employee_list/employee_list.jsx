/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import EmployeeListItem from '../employee_list_item/employee_list_item'
import './employee_list.css'

const EmployeeList = ({employeeData, onDelete}) => {

    const elements = employeeData.map(item => {
        const{id, ...itemProps} = item;
        return(
            <EmployeeListItem 
            key={id} 
            {...itemProps}
            onDelete = {() => onDelete(id)}
            />
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeeList;