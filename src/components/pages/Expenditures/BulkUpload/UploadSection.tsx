import SimpleButton from "@/components/ui/buttons/SimpleButton";
import { Image } from "@unpic/react";
import { X } from "lucide-react";
import { useRef, useState } from "react";

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const clickButton = () => {
    if (!file) {
      fileInputRef.current?.click();
      return;
    }

    alert("Uploading file " + file.name);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full flex justify-center py-5">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/upload-file.png"
          width={400}
          height={400}
          alt="upload file"
          layout="constrained"
        />

        <h1 className="text-2xl text-slate-600 font-medium mt-2">
          Upload your file
        </h1>

        <p className="font-normal text-slate-700 w-2/3 text-center">
          Stop wasting time entering expenses manually. Save time by importing
          your transactions by uploading your file.
        </p>

        <input
          ref={fileInputRef}
          id="bulk-upload"
          name="bulk-upload"
          type="file"
          className="hidden"
          accept=".pdf,.csv"
          onChange={handleFileChange}
        />

        <SimpleButton onClick={clickButton}>
          {file ? "Submit File" : "Upload File"}
        </SimpleButton>

        {file && (
          <div className="flex items-center gap-2 mt-3">
            <p>The file you uploaded is: {file.name}</p>
            <X
              size={20}
              className="text-red-500 cursor-pointer"
              onClick={handleRemoveFile}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
