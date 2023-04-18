import react from 'react';

class Card extends react.Component {
    render() {
        return (
            <div className="card border-2 border-light bg-white mr-3" style={{width: "30%"}}>
                <a href={this.props.img} target="_blank"><img src={this.props.img} class="card-img-top" alt="..." style={{borderRadius: "5%", height: "45vh"}}/></a>
                <div className="card-body text-left">
                    <h5 className="card-title">{this.props.location}</h5>
                    <p className="card-text">{this.props.dist} Kilometros de distancia</p>
                    <h6 className="text-dark">{this.props.price} USD/noche</h6>
                </div>
            </div>
        );
    }
}
export default Card;