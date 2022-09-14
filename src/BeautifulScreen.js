import './BeautifulScreen.css';


const BeautifulScreen = ({numVal}) => {
    return (
        <div className="d-flex center">
            <div className="screen">
                    {numVal}
            </div>
        </div>
    )
}


export default BeautifulScreen;
