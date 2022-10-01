/*function Meet(props) {
    return(
        <div>
            <img src={props.img} alt="man" width="400px"/>
<h1>{props.name}</h1>
<p>{props.age}</p>
<p>{props.description}</p>
        </div>
    )
}
export default Meet;*/

function Meet({img,name,age,description}) {
    return(
        <div>
<img src={img} alt="man" width="400px"/>
<h1>{name}</h1>
<p>{age}</p>
<p>{description}</p>
        </div>
    )
}
export default Meet;