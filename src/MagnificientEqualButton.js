
import './MagnificientEqualButton.css';
import './TheTitle.css';

function MagnificientEqualButton(props) {
    const eq = props.myeq
    return (
        <div className="d-Flex">
            <button className="equal" value={eq} name={eq}>
                {eq}
            </button>
        </div>
    )
}

export default MagnificientEqualButton;