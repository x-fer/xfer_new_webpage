export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-[#262626] shadow-md mb-90">
              <div className="flex items-center">
                  <img src="/XFER-Logo.png" alt="Logo" className="h-10 mr-4" />
                  
                  <div className="w-20 h-px bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] mx-4" />
                  
                  <span className="text-sm">Pluralitas non est ponenda sine necessitate.</span>
              </div>
              <a href="https://forms.gle/N4M64yja3uPPSJgX6" target="_blank" rel="noopener noreferrer">
                  <button className="text-white font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                      Prijavi se
                  </button>
              </a>
          </header>
    )
}