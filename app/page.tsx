export async function getServerSideProps() {
  const res = await fetch("https://opensheet.elk.sh/1qwtUjm1ghhxuBK_urQZntHKaKKbH8eAeOT6m23__W0Y/Sheet1");
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div style={{ padding: 25, fontFamily: "Arial" }}>
      <h1>My Link Page 🔥</h1>

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
