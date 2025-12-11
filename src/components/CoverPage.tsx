import gleadsLogo from '../assets/Logo Gleads (2).png';
import backgroundImg from '../assets/background.jpg';

interface CoverPageProps {
  proposalTitle: string;
  solutionOverview: string;
  clientCompany: string;
  clientName: string;
  quoteDate: string;
}

export default function CoverPage({
  proposalTitle,
  solutionOverview,
  clientCompany,
  clientName,
  quoteDate,
}: CoverPageProps) {
  return (
    <div
      className="page-break w-[210mm] h-[297mm] relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff'
      }}
    >      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header - Logo */}
        <div className="flex justify-start items-start mb-8 px-8 pt-8">
          <img
            src={gleadsLogo}
            alt="Gleads Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Hero Content - Main Title (at top) - Centered with equal padding */}
        <div className="w-full px-8">
          {/* Main Title - Natural text wrap */}
          <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 mb-6">
            {proposalTitle.toUpperCase()}
          </h1>

          {/* Description */}
          <div className="max-w-lg">
            <p className="text-gray-900 text-sm leading-relaxed">
              {solutionOverview}
            </p>
          </div>
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="flex-1"></div>

        {/* Footer - Info Grid */}
        <div className="px-8 pb-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Prepared For */}
            <div>
              <p className="text-gray-900 text-xs font-bold tracking-wide uppercase mb-2">
                PREPARE FOR
              </p>
              <p className="text-gray-900 text-base font-bold">
                {clientCompany || 'Client Company'}
              </p>
            </div>

            {/* Date */}
            <div>
              <p className="text-gray-900 text-xs font-bold tracking-wide uppercase mb-2">
                DATE
              </p>
              <p className="text-gray-900 text-base font-bold">
                {new Date(quoteDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                }).replace(/\//g, '/')}
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-gray-900 text-xs font-bold tracking-wide uppercase mb-2">
                CONTACT
              </p>
              <p className="text-gray-900 text-xs font-medium leading-relaxed">
                service@gleadsglobal.com<br />
                +65 3138 1666
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
