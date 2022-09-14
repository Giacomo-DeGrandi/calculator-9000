import './BeautifulScreen.css';
import './TheTitle.css';


function BeautifulScreen(props) {

    let show = props.screen


    return (
        <div className="d-Flex">
            <div className="screen">{show}</div>
        </div>
    )
}

export default BeautifulScreen;
