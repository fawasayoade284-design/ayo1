export default async function Home() {
  let data: any[] = [];

  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1qwtUjm1ghhxuBK_urQZntHKaKKbH8eAeOT6m23__W0Y/Sheet1",
      { cache: "no-store" }
    );

    data = await res.json();
  } catch (error) {}

  return (
    <main style={{ fontFamily: "Arial", padding: 25, textAlign: "center" }}>
      
      <h1 style={{ fontSize: 32 }}>🎵 Ayfasco</h1>
      <p style={{ color: "gray" }}>Official music & links page</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>🔥 My Links</h2>

      {data.map((item: any, i: number) => (
        <div key={i} style={{ margin: "12px 0" }}>
          <a
            href={item.link}
            target="_blank"
            style={{
              display: "block",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "black"
            }}
          >
            {item.name}
          </a>
        </div>
      ))}

    </main>
  );
}
