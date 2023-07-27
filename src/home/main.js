import mainImg from '../images/vegetables.jpg'

export const Main = ({display, width, height, justifyContent, padding}) => {
    return (
        <div style={{display:display?display : 'block', width:width?width : '100%', height:height?height : '100%', justifyContent:justifyContent?justifyContent: 'center', padding:padding?padding : '30px 0'}}>
            <img src={mainImg}  alt="green-vegetables-flat" />
        </div>
    )
}