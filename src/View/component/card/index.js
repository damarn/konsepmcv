import React from 'react'
import "../../style/component/card.css";

const Card = (props) => {
    return(
        <div className="Card">
            <div className="CardHeader">
                <div className="CardTitle">{props.Title}</div>
                <div className="CardStatus" style={{backgroundColor:props.Status}}/>
            </div>
            <img className="CardChart" src="https://mdbcdn.b-cdn.net/wp-content/uploads/2019/02/chart2.jpg" alt="Chart"/>
        </div>
    )
}
export default Card;