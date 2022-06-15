import Image from "next/image";

function SmallCard(props) {
  return (
    <div className="small-card border-2 rounded-lg p-3">
      <div className="small-card-image relative">
        <img src={props.image} className="w-100" />
      </div>
      <h1>{props.location}</h1>
      <h3>{props.istance}</h3>
    </div>
  );
}
export default SmallCard;