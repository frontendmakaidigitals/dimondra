const SmallLoadingSpinner = () => {
  return (
    <svg
      className="w-6 h-6 animate-spin"
      viewBox="0 0 40 40"
      height="24"
      width="24"
    >
      <circle
        className="track stroke-gray-300"
        cx="20"
        cy="20"
        r="10"
        strokeWidth="3"
        fill="none"
      />
      <circle
        className="car stroke-black"
        cx="20"
        cy="20"
        r="10"
        strokeWidth="3"
        fill="none"
        strokeDasharray="1, 100"
        strokeDashoffset="0"
        strokeLinecap="round"
      />
      <style>
        {`
            @keyframes stretch {
              0% { stroke-dasharray: 0, 100; stroke-dashoffset: 0; }
              50% { stroke-dasharray: 50, 100; stroke-dashoffset: -20; }
              100% { stroke-dashoffset: -80; }
            }
            
            .car {
              animation: stretch 1s ease-in-out infinite;
            }
          `}
      </style>
    </svg>
  );
};

export default SmallLoadingSpinner;
