/* eslint-disable react/prop-types */
import './employee_list_item.css'

const EmployeeListItem = ({name, salary, bonus}) => {

    let liClassName = "list-group-item d-flex justify-content-between";
    if (bonus){
        liClassName += " increase";
    }

    return(
        <li className={liClassName}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm" type='button'>
                    <i className="fa-solid fa-cookie"></i>
                </button>

                <button type='button' className="btn-trash btn-sm">
                <i className="fa-solid fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeeListItem