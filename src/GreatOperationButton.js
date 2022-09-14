import './GreatOperationButton.css';
import './TheTitle.css';



function GreatOperationButton(props) {

    const ope = props.operator;
    return (
        <div className="d-Flex">
            <div className="myButtons-op">
                {
                    ope.map(props => (
                    <button className="button-op" value={props} key={props} name={props} > {props} </button>
                ))}
            </div>
        </div>
    )
}


export default GreatOperationButton;
