import gleadsLogo from '../assets/gleads logo.webp';

interface TermsPage1Props {
    serviceNotes: string;
    warrantyPolicy: string;
    serviceType: string;
    pageTitle: string;
    companyEmail: string;
}

export default function TermsPage1({
    serviceNotes,
    warrantyPolicy,
    serviceType,
    pageTitle,
    companyEmail,
}: TermsPage1Props) {
    return (
        <div
            className="page-break terms-page w-[210mm] h-[297mm] bg-white"
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'visible',
                padding: '48px',
                boxSizing: 'border-box',
                backgroundColor: '#FDFBF5',
            }}
        >
            {/* Content Wrapper */}
            <div style={{ flex: 1, overflow: 'hidden', paddingBottom: '50px' }}>
                {/* Header */}
                <div className="mb-6">
                    <div className="flex justify-between items-center border-b-2 pb-3" style={{ borderBottomColor: '#F6581C' }}>
                        <div>
                            <img
                                src={gleadsLogo}
                                alt="Gleads Logo"
                                className="h-8 w-auto"
                            />
                            {/* <p className="text-xs text-gray-600">Marketing & Communications Agency</p> */}
                        </div>
                        <div className="text-right text-xs text-gray-600">
                            <p>Page 4</p>
                        </div>
                    </div>
                </div>

                {/* Main Title */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">{pageTitle}</h2>
                    {/* <p className="text-lg text-gray-600 mt-1">Terms & Policies - Part 1</p> */}
                </div>

                {/* Content */}
                <div>
                    {/* Service Notes */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">
                            <span className="text-gray-700 mr-2">01.</span>
                            GHI CHÚ VỀ DỊCH VỤ.
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{serviceNotes}</p>
                    </div>

                    {/* Warranty Policy - Skip for content and design services, or if empty */}
                    {serviceType !== 'content' && serviceType !== 'design' && warrantyPolicy && (
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-700 mb-3">
                                <span className="text-gray-700 mr-2">02.</span>
                                CHÍNH SÁCH BẢO HÀNH.
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{warrantyPolicy}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer - Match QuotePage */}
            <div
                className="quote-footer"
                style={{
                    marginTop: 'auto',
                    borderTop: '2px solid #e5e7eb',
                    paddingTop: '12px',
                    pageBreakInside: 'avoid',
                    breakInside: 'avoid',
                    position: 'absolute',
                    left: '48px',
                    right: '48px',
                    bottom: '48px',
                }}
            >
                <div className="flex justify-between items-center text-xs text-gray-600">
                    <p>© 2025 GLEADS Pte. Ltd. All rights reserved.</p>
                    <p>www.gleadsglobal.com | {companyEmail}</p>
                </div>
            </div>
        </div>
    );
}