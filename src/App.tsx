import liff from "@line/liff";
import useLiff from "./hooks";
import "./index.css";

function App() {
  useLiff();

  const handleShare = () => {
    liff.$deepdive.shareMessages();
  };

  const handleScan = () => {
    liff.$deepdive.readQrCode();
  };

  return (
    <div className="py-16 px-4 flex justify-center items-center flex-col h-full">
      <h1 className="text-3xl font-bold text-center text-white mb-16">
        LIFF Deep Dive Demo
      </h1>
      <button
        className="mb-4 mx-auto relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={handleShare}
      >
        LINEで友達にシェア
      </button>
      <button
        className="mx-auto relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={handleScan}
      >
        QRスキャンしてアンケートに回答
      </button>
    </div>
  );
}

export default App;
