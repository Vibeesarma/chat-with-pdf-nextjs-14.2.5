"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("🚀 ~ onDrop ~ acceptedFiles:", acceptedFiles)
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {/* Loading tommorrow */}
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%]  border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center text-center justify-center ${
          isFocused || isDragAccept ? "border-indigo-300" : "bg-indigo-100"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
