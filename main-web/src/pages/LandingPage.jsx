const LandingPage = () => {
  return (
    <>
      {/* <h1 className="text-[50px] text-[#fff3d4] " >CREDENZ</h1> */}
      {/* <h1 className="text-[150px] font-bold text-[#fff3d4] custom-outline1 custom-shadow1">
        CREDENZ
      </h1> */}

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
  <text x="50%" y="30%" dominantBaseline="middle" textAnchor="middle" 
        fontSize="40" 
        fill="#fff3d4" 
        stroke="#101e34" 
        strokeWidth="3" 
        paintOrder="stroke fill"
        className="custom-shadow1"
        >
    CREDENZ
  </text>
  <text x="67%" y="35%" dominantBaseline="middle" textAnchor="middle" 
        fontSize="20" 
        fill="#fff3d4" 
        stroke="#101e34" 
        strokeWidth="3" 
        paintOrder="stroke fill"
        className="custom-shadow2"
        >
    25
  </text>

  <text x="52%" y="52%" dominantBaseline="middle" textAnchor="middle" 
        fontSize="10" 
        fill="#fff3d4" 
        stroke="#101e34" 
        strokeWidth="2" 
        paintOrder="stroke fill"
        className="custom-shadow2"
        >
    Pixelating Realms
  </text>
</svg>

    </>
  );
};

export default LandingPage;
