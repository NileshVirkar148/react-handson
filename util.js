function DateFormater(props){
    let b;
    let a;
    console.log("Ad");
    const month = props.date.toLocaleString("en-us",{month:'long'})
    const date = props.date.toLocaleString("en-us",{day:'2-digit'})
    return <span>{date} {month}</span>
}
export default DateFormater;
