import Link from "next/link";

const Name = ({ name, id }) => {
  return (
    <div className="recipe_name">
      <h3>{name}</h3>
      <Link href={`recipe/${id}`} className="ver_mas">Ver más</Link>
    </div>
  );
};

export default Name;