import pdfSvg from './assets/pdf.svg';
import './App.css';
import FileUpload from './components/fileUpload/FileUpload.tsx';

function App() {
  return (
    <div className="App">

      
      <header className="App-header">
        <img src={pdfSvg} className="pdf-image" alt="logo" />
        <p>
        PDF to TEXT Converter
        </p>
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
