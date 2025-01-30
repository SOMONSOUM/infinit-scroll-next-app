"use client";

import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export const SearchAnime: React.FC<SearchInputProps> = ({
  onChange,
  onSubmit,
  value,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center mb-5">
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-500" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="pl-10 pr-4 py-2 border rounded-md bg-gray-800 text-white"
          placeholder="Search anime..."
        />
      </div>

      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
};
