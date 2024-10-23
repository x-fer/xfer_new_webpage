import Footer from "./components/footer";
import Header from "./components/header";

// app/page.tsx
export default function Home() {
  return (
      <div className="flex flex-col h-screen bg-[#1c1c1c] text-white">
          {/* Navigation Bar */}
          <Header />

          {/* Centered Content */}
          <main className="flex flex-col flex-1 text-center justify-center items-center mt-8 -mt-12"> {/* Adjusting margins */}
              <h1 className="text-8xl font-semibold  mt-40">X.FER</h1>
              <p className="text-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent font-semibold mt-7">Informatički klub <br /> studenata FERa.</p> {/* Increased gap */}
          </main>

          {/* Vertical Line */}
          <div className="mt-20 w-px bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] flex-grow mx-auto" /> {/* Fill remaining space */}


          {/* Footer */}
          <Footer />          
      </div>
  );
}
