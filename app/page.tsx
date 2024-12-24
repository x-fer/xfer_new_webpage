import Footer from "./components/footer";
import Header from "./components/header";
import TimelineItem from "./components/TimelineItem";
import JobCard from "./components/JobCard";

export default function Home() {
  const timelineItems = [
    {
      date: "Zimski sem.",
      title: "NatPro",
      description: "Natjecateljsko programiranje i ove akademske godine u zimskom semestru organiziramo vještinu NatPro. Cijeli semestar će biti ispunjen programerskim izazovima.",
      imageUrl: "/natpro.svg",
      isReversed: false,
      hideLabel: false,
      isLabelSvg: true,
      linkUrl: "https://xfer.hr/natpro",
    },
    {
      date: "prosinac",
      title: "Večer matematike",
      description: "🎓 Organizacija i izrada otvorenih predavanja u svrhu popularizacije matematike i znanosti među srednjoškolcima, studentima i svim ostalim zainteresiranima 📊",
      isReversed: true,
      isLabelSvg: false,
    },
    {
      title: "Došašće++",
      description: "Došašće++ božićno optimizacijsko natjecanje! U prosincu priredili smo božićno optimizacijsko natjecanje Došašće++. Nagrade su zagarantirane i ove godine!",
      imageUrl: "/dosasce.svg",
      hideLabel: true,
      isLabelSvg: true,
      linkUrl: "https://dosasce.xfer.hr",
    },
    {
      title: "IT kviz",
      description: "Kviz obuhvaća pitanja različitih IT i programerskih tema 🎮 Održava se u opuštenoj atmosferi, pružajući natjecateljima priliku da pokažu svoje znanje i vještine",
      isReversed: true,
      hideLabel: true,
    },
    {
      date: "ljetni sem.",
      title: "KibSec",
      description: "Niz radionica kibernetička sigurnost novi je projekt studentske udruge X.FER kojoj je u cilju obučavanje i priprema studenata za izazove u različitim područjima kibernetičke sigurnosti te priprema studenata za CTF (Capture the flag) natjecanja.",
      imageUrl: "/kibsec.svg",
      isLabelSvg: true,
      linkUrl: "https://ctf.xfer.hr/",
    },
    {
      date: "travanj",
      title: "Algotrade hackathon",
      description: "Uzbudljivo internacionalno optimizacijsko natjecanje 🌎 koje traje 24 sata ⏰ Primjena algoritama u simuliranom financijskom tržištu",
      imageUrl: "/algotrade.svg",
      isLabelSvg: true,
      isReversed: true,
      linkUrl: "https://algotrade.xfer.hr/",
    },
    {
      date: "svibanj",
      title: "SNAP",
      description: "Državno natjecanje iz algoritama 🏆 Individualno studentsko natjecanje u programiranju za one s naprednim vještinama koji žele testirati svoje sposobnosti",
      imageUrl: "/snap.svg",
      isLabelSvg: true,
      linkUrl: "https://snap.xfer.hr/",
    },
    {
      title: "STEM Games",
      description: "Jedinstveno natjecanje u znanju s ciljem rješavanja stvarnih problema današnjice primjenom znanstvene metode 🔬 Algoritamski zadaci i CIF izazovi",
      imageUrl: "/snap.svg",
      hideLabel: true,
      isReversed: true,
    },
    {
      title: "Game X.PRESS",
      description: "Studentsko natjecanje u izradi video igara poznatije kao Game jam 🚀 Traje 24h ⏰ održava se uživo. Natjecatelji sami odabiru tehnologiju, žanr i stil igrice prema svojim željama",
      imageUrl: "/game.svg",
      hideLabel: true,
      isLabelSvg: true,
      linkUrl: "https://game-xpress.xfer.hr/",
    },
  ];

  const jobCards = [
    {
      companyName: "Farseer",
      position: "Open Application",
      link: "https://www.farseer.com/careers/",
    },
    {
      companyName: "mireo",
      position: "Open Aplication",
      link: "https://www.mireo.com/careers/open-application",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <Header />
      <main className="flex flex-col flex-1 text-center justify-center items-center mt-8 -mt-12">
        <h1 className="text-8xl font-semibold mt-40">X.FER</h1>
        <p className="text-xl bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent font-semibold mt-7">
          Informatički klub <br /> studenata FERa.
        </p>
        <div className="mt-20" />
      </main>

      <div className="relative flex flex-col items-center">
        <div className="absolute w-px h-[550vh] bg-gradient-to-b from-[#FF5F6D] to-[#FFC371] left-1/2 transform -translate-x-1/2"></div>
        <div className="py-40" />

        <section className="flex flex-col items-center">
          <div className="relative w-full max-w-screen-lg mx-auto">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center mt-20 w-full">
  <h2 className="text-4xl font-semibold mb-6">Prilike kod naših partnera</h2>
  <div className="w-full max-w-screen-xl px-8">
    {jobCards.map((job, index) => (
      <JobCard
        key={index}
        companyName={job.companyName}
        position={job.position}
        link={job.link}
      />
    ))}
  </div>
</section>

      </div>

      <Footer />
    </div>
  );
}
