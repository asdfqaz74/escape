"use client";

import { useState } from "react";
import Image from "next/image";

interface EscapeRoom {
  title: string;
  description: string;
  genre: string[];
  difficulty: string;
  length: string;
  image: string;
  time: string[];
  review?: string[];
}

interface EscapeCardProps {
  room: EscapeRoom;
}

const EscapeCard = ({ room }: EscapeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-zinc-600">
      {/* 이미지 영역 - 클릭 가능 */}
      <div
        className="relative aspect-4/3 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {imageError ? (
          <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
            <span className="text-6xl">🔐</span>
          </div>
        ) : (
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-xl font-bold text-white mb-2">{room.title}</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {room.genre.map((g, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-black/70 text-amber-400 rounded-full border border-amber-400/50"
              >
                {g}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-300">
            <span className="flex items-center gap-1">
              <span className="text-amber-400">난이도</span> {room.difficulty}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-amber-400">시간</span> {room.length}
            </span>
          </div>
        </div>
        {/* 확장 표시 아이콘 */}
        <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full">
          <svg
            className={`w-4 h-4 text-white transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* 확장된 설명 영역 */}
      <div
        className={`grid transition-all duration-300 ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 border-t border-zinc-800">
            {/* 설명 */}
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {room.description}
            </p>

            {/* 예약 가능 시간 */}
            <div>
              <h3 className="text-amber-400 font-semibold mb-3">
                🕐 예약 가능 시간
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {room.time.map((t, index) => (
                  <button
                    key={index}
                    className="px-3 py-2 text-sm bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* 후기 */}
            {room.review && room.review.length > 0 && (
              <div className="mt-4">
                <h3 className="text-amber-400 font-semibold mb-3">📝 후기</h3>
                <div className="flex flex-wrap gap-2">
                  {room.review.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-sm bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 rounded-lg transition-colors duration-200 font-medium"
                    >
                      후기{index + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscapeCard;
