"use client";

import qs from "query-string";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

import { FC, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {}

const Search: FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl(
      { url: "/search", query: { term: value } },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const clearHandler = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          onClick={clearHandler}
          className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
        />
      )}
      <Button
        className="rounded-l-none"
        variant="secondary"
        size="sm"
        type="submit"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
