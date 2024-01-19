/* eslint-disable react/prop-types */

import './employee_list_item.css'

const EmployeeListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let liClassName = "list-group-item d-flex justify-content-between";
    if (increase){
        liClassName += " increase";
    }

    if(rise){
        liClassName += " like"
    }

    return(
        <li className={liClassName}>
            <span data-toogle = "rise" onClick={onToggleProp} className={"list-group-item-label"}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm" type='button' data-toogle = "increase" onClick={onToggleProp}>
                    <i className="fa-solid fa-cookie"></i>
                </button>

                <button type='button' className="btn-trash btn-sm" onClick={onDelete}>
                <i className="fa-solid fa-trash"></i>
                </button>
                <i className="fa-solid fa-star"></i>
            </div>
        </li>
    )
}
    

export default EmployeeListItem