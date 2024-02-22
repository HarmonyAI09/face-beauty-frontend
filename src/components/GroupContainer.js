import "./GroupContainer.css"
const GroupContainer = (props) => {
    return (
        <div className="group_container">
            <div className="group_title">
                {props.title}
            </div>
            <div className="group_content">
                {props.children}
            </div>
        </div>
    );
}

export default GroupContainer;