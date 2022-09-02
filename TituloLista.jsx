import "../App";
import UserImage from "./UserImage";
function TituloLista({ Tarea, imgUrl, imgAlt }) {
  return (
    <div className="user">
      <h2>{Tarea}</h2>
      <UserImage imgUrl={imgUrl} imgAlt={imgAlt} />
      <input type="checkbox" />
    </div>
  );
}

export default TituloLista;
