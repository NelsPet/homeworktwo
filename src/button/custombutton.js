import { useState } from "react"
import { Aboutwebsite } from "../component/text"

export const Custombutton = (props) => {

   
    const [clicked,  setClick] = useState(false);

    const Click = () => {
        setClick(!clicked)
    }


    return (
  
        <div className="buttoninfo">
        {
            clicked === true ?  
            <p className="message" ><Aboutwebsite aboutwebsite={{aboutwebsite:props?.aboutwebsite}}/></p>
            :
            <p></p>
        }
            <button className="infobutton"  style={{borderRadius:props?.borderRadius}} onClick={Click}>
                {clicked === false ? props?.text : props?.hide}
            </button>
        </div>
    )
}