const Url = "http://localhost:3001/";

export async function uploadPdfToText(file) {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch(`${Url}pdf/ToText`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload PDF');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw error;
    }
  }
  