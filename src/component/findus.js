import { useState } from "react"
import { Location } from "./text"

export const Findus = (props) => {

    const [showLocation, setLocation] = useState(false)

    const Click = () => {
        setLocation(!showLocation);
    }


    return (
        <div className="findUsContainer">
            <h2 onClick={Click} className="findUsButt">Find Us</h2>
        
            {
            showLocation === true ?
            <p className="infoLocation"><Location location={{location:props?.location}}/></p>
            :
            <p></p>
        }
        </div>
    )
}