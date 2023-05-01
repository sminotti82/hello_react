import React, {Component} from "react";
import Navbar from "./componenti/navBar";
import Cards from "./componenti/cardMenu";
import nighiri from './img/nighiri.jpg';
import huramaki from './img/huramaki.jpg';
import hossomaki from './img/hossomaki.jpg';
import temaki from './img/temaki.jpg';
import sashimi from './img/sashimi.jpg';



class App extends Component {
  state={cards:[
       {id:0,nome:'nighiri',prezzo:10,descrizione:'mix di sushi composto da 10pezzi tonno, salmone, branzino, gambero, polopo',immagine:nighiri},
       {id:1,nome:'huramaki',prezzo:6,descrizione:'rol di riso con interno alga e salmone esterno salmone e salsa teriaki',immagine:huramaki},
       {id:2,nome:'hossomaki',prezzo:4,descrizione:'6 hossomaki salmone',immagine:hossomaki},
       {id:3,nome:'temaki',prezzo:2.5,descrizione:'temaki tonno avocado',immagine:temaki},
       {id:4,nome:'sashimi',prezzo:14,descrizione:'sashimi salmone',immagine:sashimi},
  ]}
  cancellazione = cardId =>{
    const cards = this.state.cards.filter(card=>card.id!== cardId);
    this.setState({cards})
  }
render(){
  return (
    <>
      <Navbar />
      <div className="container">
           <h3 style={{color:'#4d4d4d'}}>Cosa vuoi ordinare?</h3>
             <div className="row">
                    {this.state.cards.map (card =>(
                       <Cards  
                           key = {card.id}
                           nome = {card.nome}
                           prezzo ={card.prezzo}
                           descrizione = {card.descrizione}
                           immagine = {card.immagine}
                           />

                    ))}

             </div>
      </div>
    </>
   )
  }
}

export default App;
