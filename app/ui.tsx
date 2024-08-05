"use client";

import FileDragDropZone from "components/file-dragdropzone";
import ImageList from "components/image-list";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="p-2 flex flex-col gap-4">
      <Logo />
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <FileDragDropZone />
      <ImageList searchInput={searchInput} />
    </div>
  );
}
