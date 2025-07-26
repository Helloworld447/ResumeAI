import { useState } from "react";
import React from "react";
//The execution starts with the return() section when React renders.

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null); 
  // setFile is function to update the value of file. The next part is a type annotation that basically says file will either be a File object (like a PDF) or null (nothing uploaded yet)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]; // e.target.files contains the list of files selected by user. ?.[0] gets the first file in that list, if it exists.
    if (selected && selected.type === "application/pdf") { // If the user clicked cancel or didn't pick a file, selected will be undefined or null
      setFile(selected);
    } else {
      alert("Please upload a PDF file.");
      setFile(null);
    }
  };

  return ( //This entire part is the JSX that React will render to the screen
    <form className="space-y-4 p-4 max-w-md mx-auto">
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}  //Triggers the handleFileChange function when the user selects a file
        className="border p-2 w-full" //Tailwind styling for border, padding, full width
      /> 
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded"
        disabled={!file} //disables the button unless a file is selected (file !== null)
      >
        Upload Resume
      </button>
    </form>
  );
}
