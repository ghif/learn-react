export default function Box(props) {
    console.log(props)
    return <div className="ui-container">{props.children}</div>;
}