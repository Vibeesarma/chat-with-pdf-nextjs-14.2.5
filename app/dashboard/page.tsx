import Documents from "@/components/Documents";
import React from "react";

export const dynamic = "force-dynamic";

const DashoboardPage = () => {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-indigo-600 text-3xl p-5 bg-gray-100 font-extralight">
        My Documents
      </h1>

      {/* Documents */}
      <Documents />
    </div>
  );
};

export default DashoboardPage;
