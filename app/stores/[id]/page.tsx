import { Store } from "@/app/components/store";
import { db } from "@/app/utils/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

type ProductType = { id: string | number; name: string; imageUrl: string };
type StoreType = {
  id: string | number;
  name: string;
  imageUrl: string;
  products: ProductType[];
};

// const Store: React.FC<StoreType> = (props) => {
//   const store = await getStore(props.);
// };

export default async function Page({ params }: { params: { id: string } }) {
  const store = await getStore(params.id);

  return (
    <main className="px-2">
      <img
        src={store.imageUrl}
        alt={store.name}
        className="w-full aspect-square rounded-md"
      />

      {store.products?.map((product) => (
        <Store
          id={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
        />
      ))}
    </main>
  );
}

async function getStore(storeId: string | number): Promise<StoreType> {
  const storeDocRef = doc(db, "stores", storeId.toString());
  const storeDoc = await getDoc(storeDocRef);

  if (storeDoc.exists()) {
    const storeData = storeDoc.data();

    const productsCollectionRef = collection(storeDocRef, "products");
    const productsSnapshot = await getDocs(productsCollectionRef);
    const productsList: ProductType[] = productsSnapshot.docs.map((doc) => {
      const productData = doc.data();
      return {
        id: doc.id,
        name: productData.name,
        imageUrl: productData.imageUrl,
      };
    });

    return {
      id: storeDoc.id,
      name: storeData.name,
      imageUrl: storeData.imageUrl,
      products: productsList,
    } as StoreType;
  } else {
    throw new Error("No such document!");
  }
}
