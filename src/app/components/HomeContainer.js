import RecipesGrid from '@/app/components/RecipesGrid';

const HomeContainer = () => {
  return (
    <div className="home_container">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: 'var(--color-accent)' }}>
        Las mejores recetas
      </h1>
      <RecipesGrid />
    </div>
  );
};

export default HomeContainer;