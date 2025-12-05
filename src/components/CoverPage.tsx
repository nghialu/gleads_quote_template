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
    <div className="page-break w-[210mm] h-[297mm] bg-white p-12 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative Elements - Ogilvy style */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo and Company Name */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900">GLEADS</h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="w-12 h-0.5 bg-red-500"></div>
            <p className="text-gray-600 text-lg font-light">Marketing & Communications Agency</p>
          </div>
        </div>

        {/* Main Title */}
        <div className="max-w-3xl mt-32">
          <div className="inline-block mb-6">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Proposal</span>
          </div>
          <h2 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
            {proposalTitle || 'DIGITAL MARKETING SOLUTION PROPOSAL'}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            {solutionOverview}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 pt-8">
        <div className="grid grid-cols-2 gap-12 border-t border-gray-200 pt-6">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 font-medium">Prepared For</p>
            <p className="text-2xl font-bold text-gray-900">{clientCompany || 'Client Company'}</p>
            {clientName && <p className="text-lg text-gray-600 mt-1 font-light">{clientName}</p>}
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 font-medium">Date</p>
            <p className="text-2xl font-bold text-gray-900">
              {new Date(quoteDate).toLocaleDateString('vi-VN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Accent dot pattern - subtle */}
      <div className="absolute top-20 right-16 w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-28 right-14 w-1 h-1 bg-red-400 rounded-full opacity-40"></div>
    </div>
  );
}
