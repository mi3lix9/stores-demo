import { Store } from "./components/store";

export default function Home() {
  const imageUrl = "https://logowik.com/content/uploads/images/firebase.jpg";
  const stores = [
    { id: 1, name: "الفرات", imageUrl },
    { id: 2, name: "زهرة الخلد", imageUrl },
    { id: 2, name: "تغميس", imageUrl },
    { id: 2, name: "شطة", imageUrl },
    { id: 2, name: "معطم حسن بشير", imageUrl },
    { id: 2, name: "التنور", imageUrl },
    { id: 2, name: "الشيخ", imageUrl },
    { id: 2, name: "قصر مايتي", imageUrl },
  ];
  return (
    <div className="container mx-auto px-4 flex gap-2 select-none flex-wrap">
      {stores.map((s) => (
        <Store key={s.id} id={s.id} imageUrl={s.imageUrl} name={s.name} />
      ))}
    </div>
  );
}
