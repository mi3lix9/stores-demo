type StoreType = {
  id: string | number;
  name: string;
  imageUrl: string;
  products: { id: string | number; name: string; imageUrl: string }[];
};

const Store: React.FC<StoreType> = (props) => {
  return (
    <main className="px-2">
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-full aspect-square rounded-md"
      />
    </main>
  );
};

export default Store;
