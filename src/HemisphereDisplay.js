import React from "react";
import northPic from "./images/northern hemisphere.jpg";
import southPic from "./images/Southern hemisphere.jpg";
import './hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: " it is northern hemisphere",
        picture: northPic
    },
    Southern: {
        text: " it is southern hemisphere",
        picture: southPic
    }
}

const HemishphereDisplay = ( {latitude}) => {
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    //const picture = latitude > 0 ? northPic : southPic;
    const { text, picture } = hemisphereConfig[hemisphere]
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className="image">
                    <img src={picture} alt="hemisphere"/>
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}


export default HemishphereDisplay

//import ReactDOM from 'react-dom';

//const Hemisphere = latitude > 0 ? Northern Hemisphere : Southern Hemisphere ;
// const pic1 =southPic;
// const pic2 =northPic;
// const HemishphereDisplay = (props) => {
//     console.log(props.latitude);
//     // return(
//     //     <div>you are in northern hemisphere</div>
//     // )
//     if(props.latitude>0){
//         return(
//             <center><div>You are in <strong>Northern Hemisphere</strong>
//                 <br/>
//                 <img src={pic2} alt="north" style={{width:'100', height:'100'}}/>
//             </div>
//             </center>
            
//         )
//     }
//     if(props.latitude<0){
//         return(
//             <div>You are in southern hemisphere
//                 <br/>
//                 <img src={pic1} alt="south" style={{width:'100'}}/>
//             </div>
            
//         )
//     }
// }