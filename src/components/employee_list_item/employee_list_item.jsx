/* eslint-disable react/prop-types */
import { Component } from 'react';
import './employee_list_item.css'

class EmployeeListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let liClassName = "list-group-item d-flex justify-content-between";
        if (increase){
            liClassName += " increase";
        }

        if(like){
            liClassName += " like"
        }

        return(
            <li className={liClassName}>
                <span onClick={this.onLike} className={"list-group-item-label"}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-cookie btn-sm" type='button' onClick={this.onIncrease}>
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
}
    

export default EmployeeListItem