import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import sha256 from "sha256";
import { AES } from "crypto-js";
import { Button, Chip, LinearProgress } from "@mui/material";
import { Container } from "@mui/system";

const Upload = () => {
  const chunkSize = 1048576; // 1MB
  const [showProgress, setShowProgress] = useState(false);
  const [counter, setCounter] = useState(1);
  const [fileToBeUpload, setFileToBeUpload] = useState([]);
  const [beginingOfTheChunk, setBeginingOfTheChunk] = useState(0);
  const [endOfTheChunk, setEndOfTheChunk] = useState(chunkSize);
  const [progress, setProgress] = useState(0);
  const [fileGuid, setFileGuid] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [chunkCount, setChunkCount] = useState(0);

  const progressInstance = (
    <LinearProgress variant="determinate" value={progress} />
  );

  useEffect(() => {
    if (fileSize > 0) {
      fileUpload();
    }
  }, [fileToBeUpload, progress]);

  const encryptAES = (text, key) => {
    return AES.encrypt(text, key).toString();
  };

  const uploadChunk = async (chunk) => {
    try {
      const readableChunk = await new Response(chunk).text();

      const key = sha256(chunk);
      const EncryptedChunk = encryptAES(readableChunk, key);
      console.log(key);

      console.log(counter, EncryptedChunk);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fileUpload = () => {
    setCounter(counter + 1);
    if (counter <= chunkCount) {
      var chunk = fileToBeUpload.slice(beginingOfTheChunk, endOfTheChunk);
      uploadChunk(chunk);
      setFileToBeUpload(fileToBeUpload.slice(endOfTheChunk, fileSize));
    }
  };

  const resetChunkProperties = () => {
    setShowProgress(true);
    setProgress(0);
    setCounter(1);
    setBeginingOfTheChunk(0);
    setEndOfTheChunk(chunkSize);
  };

  const getFileContext = (e) => {
    resetChunkProperties();
    const _file = e.target.files[0];
    setFileSize(_file.size);
    const _totalCount =
      _file.size % chunkSize == 0
        ? _file.size / chunkSize
        : Math.floor(_file.size / chunkSize) + 1; // Total count of chunks will have been upload to finish the file
    setChunkCount(_totalCount);
    setFileToBeUpload(_file);
    const _fileID = uuidv4() + "." + _file.name.split(".").pop();
    setFileGuid(_fileID);
  };

  return (
    <Container sx={{ p: 5 }}>
      <Button variant="contained" component="label">
        Upload
        <input
          hidden
          accept=",image/*,video/*,pdf/*"
          multiple
          type="file"
          onChange={getFileContext}
        />
      </Button>
      <div style={{ marginTop: 20 }}>
        <div>
          <b>File Size:</b>{" "}
          <Chip
            label={` ${fileSize}B , ${(fileSize / 1048576).toFixed(3)}MB`}
            sx={{ m: 1 }}
          />
        </div>
        <div>
          <b>File Name:</b> <Chip label={` ${fileGuid}`} sx={{ m: 1 }} />
        </div>
        <div>
          <b>Chunk Count:</b> <Chip label={` ${chunkCount}`} sx={{ m: 1 }} />
        </div>
        <div>
          <b>Chunk Range:</b>
          <Chip
            label={` ${beginingOfTheChunk} - ${(
              endOfTheChunk / 1048576
            ).toFixed(2)}MB`}
            sx={{ m: 1 }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Upload;
