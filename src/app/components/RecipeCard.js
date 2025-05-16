import Image from "next/image";
import Name from "@/app/components/Name";

const RecipeCard = ({ image, name, id}) => {
  return (
    <div className='recipe_card'>
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
      />
      <Name name={name} id={id} />
    </div>
  );
};

export default RecipeCard;