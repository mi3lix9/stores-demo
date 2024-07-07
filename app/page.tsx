import { collection, getDocs } from "firebase/firestore";
import { Store } from "./components/store";
import { db } from "./utils/firebase";

export default async function Home() {
  const imageUrl = "https://logowik.com/content/uploads/images/firebase.jpg";
  const stores = await getAllStores();
  return (
    <div className="container mx-auto px-4 flex gap-2 select-none flex-wrap">
      {stores.map((s) => (
        <Store key={s.id} id={s.id} imageUrl={s.imageUrl} name={s.name} />
      ))}
    </div>
  );
}

type Store = {
  id: string;
  name: string;
  imageUrl: string;
};

async function getAllStores(): Promise<Store[]> {
  const storesCollectionRef = collection(db, "stores");
  const storeSnapshot = await getDocs(storesCollectionRef);
  const storesList: Store[] = storeSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      imageUrl: data.imageUrl,
    };
  });
  return storesList;
}
