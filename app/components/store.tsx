type StoreType = {
  id: string | number;
  name: string;
  imageUrl: string;
};

export const Store: React.FC<StoreType> = (props) => {
  return (
    <a
      key={props.id}
      className="flex p-2 bg-slate-900 rounded-md w-full items-center gap-3 focus-within:outline hover:outline  "
      href={"stores/" + props.id}
    >
      <img src={props.imageUrl} className="aspect-square h-10 rounded-full" />
      <div>{props.name}</div>
    </a>
  );
};
