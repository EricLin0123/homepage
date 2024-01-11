import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import data from "../../data/portfolio.json";
import Button from "../Button";

const CopyToClipboardButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);

    // Create a range and select the text
    const range = document.createRange();
    range.selectNode(textArea);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Clean up
    document.body.removeChild(textArea);
    window.getSelection().removeAllRanges();

    // Set the copied state
    setIsCopied(true);

    // Reset the copied state after a short delay (optional)
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <Button onClick={handleCopyClick}>
      <EmailIcon fontSize={"large"} />
      &nbsp; 150107jasmine@gmail.com &nbsp;
      {isCopied ? (
        <DoneAllIcon fontSize={"large"} />
      ) : (
        <ContentCopyIcon fontSize={"large"} />
      )}
    </Button>
  );
};

export default CopyToClipboardButton;
