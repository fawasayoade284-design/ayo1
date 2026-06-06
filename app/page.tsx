export default async function Home() {
  let data: any[] = [];

  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1qwtUjm1ghhxuBK_urQZntHKaKKbH8eAeOT6m23__W0Y/Sheet1",
      {
        cache: "no-store",
      }
    );

    data = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <main style={{ padding: 25, fontFamily: "Arial" }}>
      <h1>My Links 🔥</h1>

      {data.length === 0 && <p>No data found</p>}

      {data.map((item: any, i: number) => (
        <div key={i} style={{ margin: "10px 0" }}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            👉 {item.name}
          </a>
        </div>
      ))}
    </main>
  );
}
