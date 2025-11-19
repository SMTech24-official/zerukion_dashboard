import React, { useState, useEffect } from "react";
import { MediaButton } from "./icon";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Search({ value, onChange }: SearchProps) {
  const [inputValue, setInputValue] = useState(value);
  const DEBOUNCE_TIME = 500; // fixed debounce time in ms

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue);
    }, DEBOUNCE_TIME);

    return () => clearTimeout(handler);
  }, [inputValue, onChange]);

  // Sync with parent value if it changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div>
      <div className="flex items-center gap-2 py-3 rounded-xl border border-[#E5E5EC] px-5 focus-within:border-primaryColor focus-within:ring-1 focus-within:ring-primaryColor transition">
        <MediaButton type="search" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
