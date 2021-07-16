import React from 'react'
import Styles from "./Objective.module.css"

export default function Objective(props) {
    return (
        <div className={Styles.objectivecontainer}>
            <img src={props.image} alt="illustration" />
            <div className={Styles.titledescription}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
