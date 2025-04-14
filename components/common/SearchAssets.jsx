"use client";
import { useState } from "react";

export default function SearchAssets({
  onSetShowSearchModal,
  autoFocus = false,
}) {
  const [query, setQuery] = useState("");

  return (
    <form action="" className="w-full flex items-center relative">
      <i className="fas fa-search absolute left-4 text-black text-lg"></i>
      <input
        autoFocus={autoFocus}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 bg-light-gray bg-opacity-30 px-8 py-3 rounded-md placeholder-dark-gray focus:border focus:border-black focus:outline-none focus:bg-opacity-0 focus:placeholder-black"
        placeholder="Search..."
        type="text"
      />
      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            onSetShowSearchModal?.(false);
          }}
          className="absolute right-4 text-black text-lg"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </form>
  );
}
