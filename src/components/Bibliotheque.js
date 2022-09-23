import Livre from "./Livre"


function Bibliotheque(props) {
    return <div className="biblio">
        {props.listelivres.map(item => <Livre key={item.id} url={item.url} titre={item.titre} prix={item.prix}/>)}
    </div>
}

export default Bibliotheque