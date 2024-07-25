import React from "react";
import PlaceholderDocument from "./PlaceholderDocument";

const Documents = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 justify-center lg:justify-start rounded-sm max-w-7xl gap-5 mx-auto">
      {/*
       Map through documents */}

      {/*  Place holder*/}
      <PlaceholderDocument />
    </div>
  );
};

export default Documents;
