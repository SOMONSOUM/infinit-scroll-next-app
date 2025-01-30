"use client";

import { JSX, useState } from "react";
import { LoadMore } from "../components/LoadMore";
import { SearchAnime } from "@/components/SearchAnime";
import { fetchAnime } from "@/app/action";

const AnimeSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<JSX.Element[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await fetchAnime(1, 8, searchTerm);
    setData(result);
  };

  return (
    <>
      <SearchAnime
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={handleSearch}
      />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </>
  );
};

export default AnimeSearch;
