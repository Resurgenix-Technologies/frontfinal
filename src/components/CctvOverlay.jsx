import { useEffect, useState } from 'react';
import '../styles/cctv.css';

export default function CctvOverlay() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="cctv-corners">
        <div className="cctv-corner-bl"></div>
        <div className="cctv-corner-br"></div>
      </div>
      <div className="cctv-scanline"></div>
      <div className="cctv-grid"></div>
      <div className="cctv-rec">
        <span className="cctv-rec-dot"></span>
        REC
      </div>
      <div className="cctv-timestamp">CAM-01 &nbsp;|&nbsp; {time}</div>
    </>
  );
}
