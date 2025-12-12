import gleadsLogo from '../assets/gleads logo.webp';

interface TermsPage2Props {
    paymentTerms: string;
    bankInfo: string;
    pageTitle: string;
}

export default function TermsPage2({
    paymentTerms,
    bankInfo,
    pageTitle,
}: TermsPage2Props) {
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
                    <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3">
                        <div>
                            <img
                                src={gleadsLogo}
                                alt="Gleads Logo"
                                className="h-8 w-auto"
                            />
                            {/* <p className="text-xs text-gray-600">Marketing & Communications Agency</p> */}
                        </div>
                        <div className="text-right text-xs text-gray-600">
                            <p>Page 5</p>
                        </div>
                    </div>
                </div>

                {/* Main Title */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">{pageTitle}</h2>
                    <p className="text-lg text-gray-600 mt-1">Payment & Confirmation</p>
                </div>

                {/* Content */}
                <div>
                    {/* Payment Terms */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">
                            <span className="text-gray-700 mr-2">01.</span>
                            PHƯƠNG THỨC THANH TOÁN
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{paymentTerms}</p>
                    </div>

                    {/* Bank Information */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">
                            <span className="text-gray-700 mr-2">02.</span>
                            THÔNG TIN TÀI KHOẢN NGÂN HÀNG
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{bankInfo}</p>
                    </div>

                    {/* Signature Section */}
                    <div className="mt-8 pt-6 border-t-2 border-gray-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            XÁC NHẬN & KÝ KẾT
                        </h3>
                        <div className="grid grid-cols-2 gap-8">
                            {/* Client Signature */}
                            <div className="text-center">
                                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 mb-3 h-32 flex items-center justify-center shadow-sm">
                                    <p className="text-gray-400 text-sm">Chữ ký khách hàng</p>
                                </div>
                                <p className="font-bold text-gray-900 text-sm">XÁC NHẬN CỦA KHÁCH HÀNG</p>
                                <p className="text-xs text-gray-600 mt-1">(Ký và ghi rõ họ tên)</p>
                            </div>

                            {/* Company Signature */}
                            <div className="text-center">
                                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 mb-3 h-32 flex items-center justify-center shadow-sm">
                                    <p className="text-gray-400 text-sm">Chữ ký & đóng dấu</p>
                                </div>
                                <p className="font-bold text-gray-900 text-sm">ĐẠI DIỆN CÔNG TY CỔ PHẦN GLEADS</p>
                                <p className="text-xs text-gray-600 mt-1">(Ký và đóng dấu)</p>
                            </div>
                        </div>
                    </div>
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
                    <p>www.gleadsglobal.com | service@gleadsglobal.com</p>
                </div>
            </div>
        </div>
    );
}