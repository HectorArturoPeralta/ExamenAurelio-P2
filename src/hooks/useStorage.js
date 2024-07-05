// Ejemplo de componente usando useStorage
import React, { useState } from 'react';
import useStorage from '../hooks/useStorage';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const { progress, url, error, isCompleted } = useStorage({
    itemImage: file,
    itemName,
    itemDescription
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Aquí puedes llamar a tu hook useStorage con los datos del archivo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
      />
      <input
        type="text"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        placeholder="Item Description"
      />
      <button type="submit">Upload</button>
      {progress > 0 && <p>Progress: {progress}%</p>}
      {error && <p>Error: {error.message}</p>}
      {isCompleted && <p>Upload completed! URL: {url}</p>}
    </form>
  );
};

export default UploadForm;
