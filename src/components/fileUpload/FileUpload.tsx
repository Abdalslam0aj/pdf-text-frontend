import React, { useState } from 'react';
import './FileUpload.css';
import { uploadPdfToText } from '../../services/pdfTextService'; 


function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setText('');
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    if (file.type !== 'application/pdf') {
      setMessage('Please select a valid pdf file');
      return;
    } 
    
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    debugger;

    try {
      const result = await uploadPdfToText(file)
      setText(result.text);
    } catch (error) {
      setMessage('Error uploading file');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
    <div className="file-upload-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          {file ? file.name : 'Choose File'}
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
        <button type="submit" className="upload-button">Upload</button>
        {isLoading && <div className="loading-spinner"></div>}
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    <div className="textarea-container">
    {text && <textarea className="text" rows={10} value={text}></textarea>}
    </div>
    </div>
    
  );
}

export default FileUpload;
