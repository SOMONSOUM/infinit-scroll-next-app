"use client";

import { fetchAnime } from "@/app/action";
import { JSX, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimeCard } from "./AnimeCard";
import { Loader } from "lucide-react";

let page = 2;

export type AnimeCard = JSX.Element;

export const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Loader className="animate-spin text-white w-10 h-10" />
        </div>
      </section>
    </>
  );
};
