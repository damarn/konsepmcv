import React from 'react'
import Card from '../../component/card'
import '../../style/container/home.css'


let Home = (props) => {
    let CardComponent = [];
    let StatusMachine = '';
    for (let i=0;i<props.Data.length;i++) {
        if(props.Data[i].Status==='Run'){
            StatusMachine = 'green';
        }
        else if(props.Data[i].Status==='Stop'){
            StatusMachine = 'red';
        }
        else{
            StatusMachine = 'black';
        }
        CardComponent.push(<Card Title={props.Data[i].Title} Status={StatusMachine}/>)
    }
    return (
        <body>
            <div className="Home">{CardComponent}</div>
        </body>
    );
}
export default Home;


