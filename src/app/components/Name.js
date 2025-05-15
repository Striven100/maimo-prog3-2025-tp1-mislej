const Name = ({ name, id }) => {
    return (
      <div className="recipe_name">
        <h3>{name}</h3>
        <a href={`?id=${id}`} className="ver_mas">Ver más</a>
      </div>
    );
  };

  export default Name;