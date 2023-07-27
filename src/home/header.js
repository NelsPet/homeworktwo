import { Custombutton } from "../button/custombutton"


export const Header = ({text, hide}) => {
    return (
        <div>
             <Custombutton text = {'Website information'} hide={'Hide information'} borderRadius={'10px'}/>
        </div>
    )
}