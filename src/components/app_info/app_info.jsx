import './app_info.css'

// eslint-disable-next-line react/prop-types
const AppInfo = ({employee, increased}) => {
    return(
        <div className="app_info">
            <h1>Учёт сотрудников в компании Олартс</h1>
            <h2>Общее число сотрудников: {employee}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo