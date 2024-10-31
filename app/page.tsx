import Footer from "./components/footer";
import Header from "./components/header";

// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Centered Content */}
      <main className="flex flex-col flex-1 text-center justify-center items-center mt-8 -mt-12">
        {/* Adjusting margins */}
        <h1 className="text-8xl font-semibold mt-40">X.FER</h1>
        <p className="text-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent font-semibold mt-7">
          Informatički klub <br /> studenata FERa.
        </p>
        {/* Added gap between subtext and the vertical line */}
        <div className="mt-20" />
      </main>

      {/* Continuous Vertical Line */}
      <div className="relative flex flex-col items-center">
        <div className="absolute w-px h-[200vh] bg-gradient-to-b from-[#FF5F6D] to-[#FFC371] left-1/2 transform -translate-x-1/2"></div>

        {/* Large Spacer to push the timeline further down */}
        <div className="py-40" /> {/* Increased space using padding */}

        {/* Timeline Section */}
        <section className="flex flex-col items-center">
          {/* Timeline */}
          <div className="relative w-full max-w-screen-lg mx-auto">
            {/* Timeline Item 1 */}
            <div className="relative pt-20 flex justify-center items-center w-full">
              {/* Left Item */}
              <div className="w-5/12 text-right pr-12"> {/* Increased right padding */}
                <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-white py-2 px-4 rounded-full">
                  Zimski sem.
                </span>
              </div>
              {/* Connecting Dot */}
              <div className="relative z-10 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] w-4 h-4 rounded-full"></div>
              {/* Right Content */}
              <div className="w-5/12 text-left pl-12"> {/* Increased left padding */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent mb-4">
                  NatPro
                </h3>
                <div className="p-1 rounded-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                  <div className="bg-[#1c1c1c] p-4 rounded-xl w-full min-h-[140px]">
                    <p className="text-white/90">
                      Natjecateljsko programiranje i ove akademske godine u zimskom
                      semestru organiziramo vještinu NatPro. Cijeli semestar će biti
                      ispunjen programerskim izazovima.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pt-20 flex justify-center items-center w-full">
              {/* Left Content */}
              <div className="w-5/12 text-right pr-12"> {/* Increased right padding */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent mb-4">
                  Došašće++
                </h3>
                <div className="p-1 rounded-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                  <div className="bg-[#1c1c1c] p-4 rounded-xl w-full min-h-[140px]">
                    <p className="text-left text-white/90">
                      Došašće++ božićno optimizacijsko natjecanje! U prosincu
                      priredili smo božićno optimizacijsko natjecanje Došašće++.
                      Nagrade su zagarantirane!
                    </p>
                  </div>
                </div>
              </div>
              {/* Connecting Dot */}
              <div className="relative z-10 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] w-4 h-4 rounded-full"></div>
              {/* Right Item */}
              <div className="w-5/12 text-left pl-12"> {/* Increased left padding */}
                <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-white py-2 px-4 rounded-full">
                  Prosinac
                </span>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pt-20 flex justify-center items-center w-full">
              {/* Left Item */}
              <div className="w-5/12 text-right pr-12"> {/* Increased right padding */}
                <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-white py-2 px-4 rounded-full">
                  Zimski sem.
                </span>
              </div>
              {/* Connecting Dot */}
              <div className="relative z-10 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] w-4 h-4 rounded-full"></div>
              {/* Right Content */}
              <div className="w-5/12 text-left pl-12"> {/* Increased left padding */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent mb-4">
                  NatPro
                </h3>
                <div className="p-1 rounded-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                  <div className="bg-[#1c1c1c] p-4 rounded-xl w-full min-h-[140px]">
                    <p className="text-white/90">
                      Natjecateljsko programiranje i ove akademske godine u zimskom
                      semestru organiziramo vještinu NatPro. Cijeli semestar će biti
                      ispunjen programerskim izazovima.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
