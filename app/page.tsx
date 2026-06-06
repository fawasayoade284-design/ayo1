
export default async function Home() {
  const res = await fetch("https://opensheet.elk.sh/1qwtUjm1ghhxuBK_urQZntHKaKKbH8eAeOT6m23__W0Y/Sheet1", {
    cache: "no-store"
  });

  const data = await res.json();

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>My Links 🔥</h1>

      {data.map((item, i) => (
        <div key={i} style={{ margin: "10px 0" }}>
          <a href={item.link} target="_blank">
            👉 {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}
