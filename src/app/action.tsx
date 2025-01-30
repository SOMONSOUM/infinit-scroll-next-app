"use server";

import { AnimeCard, AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page = 1, limit = 8) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`
  );

  const data = await response.json();
  const newData: AnimeProp[] = data.map((item: Omit<AnimeProp, "id">) => ({
    id: crypto.randomUUID(),
    ...item,
  }));
  return newData.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
