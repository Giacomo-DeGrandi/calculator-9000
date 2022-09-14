import './BeautifulScreen.css';
import './TheTitle.css';


const BeautifulScreen = ({numVal}) => {
    return (
            <div className="screen">
                <h1>{numVal}</h1>
            </div>
    )
}


export default BeautifulScreen;
