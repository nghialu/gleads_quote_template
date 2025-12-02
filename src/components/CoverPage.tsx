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
    <div className="page-break w-[210mm] h-[297mm] bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white px-12 py-12 flex flex-col justify-between relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo and Company Name */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight">GLEADS</h1>
          <p className="text-blue-200 text-lg mt-2">Marketing & Communications Agency</p>
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mt-32">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg mb-6">
            <span className="text-blue-200 font-medium">PROPOSAL</span>
          </div>
          <h2 className="text-6xl font-bold leading-tight mb-8">
            {proposalTitle || 'DIGITAL MARKETING SOLUTION PROPOSAL'}
          </h2>
          <p className="text-2xl text-blue-100 leading-relaxed max-w-3xl">
            {solutionOverview}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 border-t border-white/20 pt-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-blue-200 text-sm mb-2">PREPARED FOR</p>
            <p className="text-2xl font-bold">{clientCompany || 'Client Company'}</p>
            {clientName && <p className="text-lg text-blue-100 mt-1">{clientName}</p>}
          </div>
          <div className="text-right">
            <p className="text-blue-200 text-sm mb-2">DATE</p>
            <p className="text-2xl font-bold">
              {new Date(quoteDate).toLocaleDateString('vi-VN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-b-4 border-white/20"></div>
    </div>
  );
}
