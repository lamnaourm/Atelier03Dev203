import Image from "./Image";
import Prix from "./Prix";
import Titre from "./Titre";


function Livre(props) {
    return <div className="livre">
       <Image url={props.url}/>
       <Titre titre={props.titre}/>
       <Prix prix={props.prix}/>
    </div>
}

export default Livre;