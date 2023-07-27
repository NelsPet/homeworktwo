import { Findus } from "../component/findus";
import { Workhouse } from "../component/workhours"
import { Callus } from "../component/callus"

export const Footer = () => {
    return (
        <div className="footerContent">
            <Findus />
            <Workhouse />
            <Callus />
        </div>
    )
}