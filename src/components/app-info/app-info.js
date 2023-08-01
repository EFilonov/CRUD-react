import "./app-info.css";

const AppInfo = (props) => {
    const {emploeeCount, promotedCount} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <h2>Общее число сотрудников: {emploeeCount()}</h2>
            <h2>Премию получат: {promotedCount()}</h2>
        </div>
    )
}

export default AppInfo;