// app/page.tsx
export default function Home() {
  return (
      <div className="flex flex-col h-screen bg-[#1c1c1c] text-white">
          {/* Navigation Bar */}
          <header className="flex justify-between items-center p-4 bg-[#262626] shadow-md mb-90">
              <div className="flex items-center">
                  <img src="/XFER-Logo.png" alt="Logo" className="h-10 mr-4" />
                  
                  {/* Horizontal Line (Stripe) */}
                  <div className="w-20 h-px bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mx-4" />
                  
                  <span className="text-sm">Pluralitas non est ponenda sine necessitate.</span>
              </div>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <button className="text-white font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                      Prijavi se
                  </button>
              </a>
          </header>

          {/* Centered Content */}
          <main className="flex flex-col flex-1 text-center justify-center items-center mt-8 -mt-12"> {/* Adjusting margins */}
              <h1 className="text-8xl font-semibold  mt-40">X.FER</h1>
              <p className="text-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent font-semibold mt-7">Informatički klub <br /> studenata FERa.</p> {/* Increased gap */}
          </main>

          {/* Vertical Line */}
          <div className="mt-20 w-px bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] flex-grow mx-auto" /> {/* Fill remaining space */}


          {/* Footer */}
          <footer className="bg-gray-800 p-8">
  <div className="flex justify-between"> {/* Removed space-x class */}
    {/* Left Column for Links */}
    <div className="flex-1 pr-2"> {/* Added padding-right for spacing */}
      <h3 className="text-gray-300 font-bold mb-2">Column 1 Title</h3> {/* Reduced margin */}
      <ul>
        <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Link 1</a></li>
        <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Link 2</a></li>
        <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Link 3</a></li>
      </ul>
    </div>

    {/* Right Column for Links */}
    <div className="flex-1 pl-0"> {/* Added padding-left for spacing */}
      <h3 className="text-gray-300 font-bold mb-2">Column 2 Title</h3> {/* Reduced margin */}
      <ul>
        <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Link 1</a></li>
        <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Link 2</a></li>
        <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Link 3</a></li>
      </ul>
    </div>
  </div>
</footer>


      </div>
  );
}
