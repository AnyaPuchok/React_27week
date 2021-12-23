import './Tarif.css';

function Card(props) {

    const { tarif, price, speed, note, part, isSelected } = props;




    return (

        < div className={"card" + (isSelected && "selected")}>
            <p className="card-title">{tarif}</p>
            <p className="card-price"><span>руб</span> {price} <span>/мес</span></p>
            <p className="card-volume">до {speed} Мбит/сек</p>
            <p className="card-note">{note} </p>
            <p className="card-part">{part} </p>


        </div>


    );
}

export default Card;