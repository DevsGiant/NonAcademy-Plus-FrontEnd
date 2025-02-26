import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { TbLayoutGridAdd } from "react-icons/tb";

const Search = () => {
  return (
    <div className="rounded-full border border-black/15 py-2 ps-1 text-nad-title">
      <form className="relative flex w-[300px] items-center xl:w-[350px]">
        <div className="border-e border-black/15">
          <Select>
            <SelectTrigger className="h-fit gap-1 border-0 bg-transparent p-0 pl-3  text-base font-medium outline-0 ring-0 focus:border-0 focus:outline-0 focus:ring-0 focus:ring-offset-0">
              <TbLayoutGridAdd className="inline text-xl text-primary " />
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem className="cursor-pointer" value="business">
                  Business
                </SelectItem>
                <SelectItem className="cursor-pointer" value="data science">
                  Data Science
                </SelectItem>
                <SelectItem className="cursor-pointer" value="arts & design">
                  Arts & Design
                </SelectItem>
                <SelectItem className="cursor-pointer" value="marketing">
                  Marketing
                </SelectItem>
                <SelectItem className="cursor-pointer" value="finance">
                  Finance
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input
            className="h-3 border-0 text-base focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            type="text"
            id="search"
          />
        </div>
        <button
          className="absolute right-[4px] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white"
          type="submit"
        >
          <FiSearch className="text-2xl font-bold" />
        </button>
      </form>
    </div>
  );
};

export default Search;
