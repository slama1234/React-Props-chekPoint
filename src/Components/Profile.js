import React from "react" ;
import PropTypes from 'prop-types';
const ProfileData = props =>
{
    const styleObject = {
        margin:"150px 350px",
        fontSize:"20px",
        border:"1px solid blue" ,
        padding: "50px",
        fontFamily:"Roboto,san-serif"
    }
    const styleButton = {
        padding:"20px 40px",
        fontSize:"20px",
        cursor:"pointer"
    }
    function clickHandler()
    {
        alert(`your name is :${props.name}`)
    }
    return (<div style = {styleObject}>
        {props.children}
        <h2>{props.name}</h2>
        <p><i>Bio : </i>{props.bio}</p>
        <p><b>Profission:</b> {props.profission}</p>
        <button onClick={clickHandler} style={styleButton}><b>Click</b></button>
        </div>
    );
}

ProfileData.defaultProps = {
    name : 'Mustapha',
    bio : `im studying web developing cuz i think it's the best industry in the world `,
    proffision:'web development, gaming ',
    src:'./profile.jpg'
};

ProfileData.propTypes = {
    name:PropTypes.string,
    bio:PropTypes.string,
    proffision: PropTypes.string,
    src:PropTypes.string

};
export default ProfileData;
