export default function Input(props) {
    console.log(props.type);
    let itype = props.type;
    if (itype === undefined){
        itype = "text";
    }
    return <input className="ui-textfield" type={itype} placeholder={props.placeholder} name={props.name}/>
}