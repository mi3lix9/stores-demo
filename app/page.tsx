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
    <main className="bg-gray-950 h-screen">
      <div className="bg-slate-900 w-full h-11"></div>
      <div className="container mx-auto px-4 flex gap-2 select-none flex-wrap">
        {stores.map((s) => (
          <a
            key={s.id}
            className="flex p-2 bg-slate-900 rounded-md w-full items-center gap-3"
            href={"stores/" + s.id}
          >
            <img src={s.imageUrl} className="aspect-square h-10 rounded-full" />
            <div>{s.name}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
