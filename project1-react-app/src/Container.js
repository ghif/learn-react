export default function Container(props) {
    console.log(props)
    return <div className="ui-container">{props.children}</div>;
}