
import './Image.css';

function Image(props) {
    function kattintasKezelo() {
        props.nagykepCsere(props.data.id);
    }

    return (
        <div className="kep">
            <img src={props.data.src} alt={props.data.alt} title={props.data.title} onClick={kattintasKezelo}/>
        </div>
    );
}

export default Image;