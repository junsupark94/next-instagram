"use client";
import Image from "next/image";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type SearchBarProps = {
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function clearSearchHandler(e: SyntheticEvent) {
    e.stopPropagation();
    setSearchValue("");
    setFocus(false);
  }

  return (
    <>
      {/* search bar */}

      <div
        className="grow z-10"
        onClick={() => {
          setFocus(true);
        }}
        ref={ref}
      >
        <label className={"flex items-center bg-gray-200 p-2 rounded-md"}>
          <Image
            src="/search.svg"
            alt="search"
            width={25}
            height={25}
            className={`mr-2 ${focus && "hidden"}`}
          />
          <input
            type="text"
            placeholder="Search"
            className={`outline-none bg-gray-200 grow ${
              !focus && "text-gray-400"
            }`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* delete icon */}
          <button onClick={clearSearchHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-5 h-5 text-slate-400 ${focus ? "" : "hidden"}`}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* end of delete icon */}
        </label>
        {focus && (
          <>
            <div className="absolute left-0 w-screen flex justify-center">
              <div className="relative top-1 w-[95vw] h-[450px] bg-white rounded-md drop-shadow-lg">
                Modal
              </div>
            </div>
          </>
        )}
      </div>
      {focus && (
        <div
          className="fixed w-screen h-screen top-0 left-0"
          onClick={(e) => {
            setFocus(false);
          }}
        />
      )}
      {/* end of search bar */}
    </>
  );
};
export default SearchBar;
