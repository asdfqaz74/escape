import EscapeCard from "@/components/EscapeCard";
import escapeData from "../../data/data.json";

const Home = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            방탈출 카페 정리해봅니다
          </h1>
        </div>
      </header>

      {/* 카드 그리드 */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {escapeData.escape.map((room, index) => (
            <EscapeCard key={index} room={room} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
