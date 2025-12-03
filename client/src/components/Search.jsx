import React from "react";
import { Button } from "@/components/ui/button";

function Search() {
  return (
    <div className="searchTools">
      <input className="search" type="text" placeholder="search"></input>
      <Button className="searchButton" variant="outline">
        Search
      </Button>
    </div>
  );
}

export default Search;
