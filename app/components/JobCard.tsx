type JobCardProps = {
    companyName: string;
    position: string;
    link: string;
  };
  
  export default function JobCard({ companyName, position, link }: JobCardProps) {
    return (
      <div className="flex justify-between items-center p-4 bg-[#403e3e] rounded-lg shadow-md mb-4">
        <div className="flex flex-col">
          <span className="text-#696868 text-sm">{companyName}</span>
          <span className="text-white font-semibold">{position}</span>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="text-white font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
            Prijavi se
          </button>
        </a>
      </div>
    );
  }
  