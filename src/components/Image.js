

function Image(props){
    return <div className="image">
        <img src={props.url} alt={props.titre}/>
    </div>
}

export default Image