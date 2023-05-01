import React, {Component} from 'react'
class Cards extends Component{
render(){
    return(
         <div className="col">
            <div className="card" style={{width:'18rem',margin:'5px',height:'25rem'}}>
                <img src={this.props.immagine} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{this.props.nome}</h5>
                <p className="card-text">{this.props.descrizione}</p>
                <h4 className='prezzo'><b>Prezzo</b> € {this.props.prezzo}</h4>
                <button   className="btn btn-primary btn-danger">elimina</button>  <a href="#" className="btn btn-primary btn-success">Aggiungi</a>
                </div>
            </div>
         </div>
    )
    }
}

export default Cards