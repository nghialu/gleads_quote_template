import gleadsLogo from '../assets/gleads logo.webp';

export default function ContactPage() {
    return (
        <div
            className="page-break contact-page w-[210mm] h-[297mm] bg-white"
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'visible',
                padding: '48px',
                boxSizing: 'border-box',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
            }}
        >
            {/* Content Wrapper */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {/* Header */}
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <img
                            src={gleadsLogo}
                            alt="Gleads Logo"
                            className="h-8 w-auto"
                        />
                        <p className="text-xs text-blue-100">Marketing & Communications Agency</p>
                    </div>
                    <div className="text-right text-xs text-blue-100">
                        <p>Page 6</p>
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-2">THÔNG TIN LIÊN HỆ</h2>
                    <p className="text-xl text-blue-100">Contact Information</p>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20 max-w-4xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Company Info */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">GLEADS PTE. LTD.</h3>
                                <div className="space-y-3 text-white">
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="text-2xl">🏢</span>
                                        <div className="text-left">
                                            <p className="font-semibold">HQ Singapore</p>
                                            <p className="text-sm text-blue-100">9 Raffles Place, #29-05, Singapore 048619</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="text-2xl">🇻🇳</span>
                                        <div className="text-left">
                                            <p className="font-semibold">VN Office</p>
                                            <p className="text-sm text-blue-100">39-41 Ngo Thi Bi St., Ho Chi Minh City</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">GET IN TOUCH</h3>
                                <div className="space-y-3 text-white">
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="text-2xl">📧</span>
                                        <div className="text-left">
                                            <p className="font-semibold">Email</p>
                                            <p className="text-sm text-blue-100">service@gleadsglobal.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="text-2xl">📞</span>
                                        <div className="text-left">
                                            <p className="font-semibold">Phone</p>
                                            <p className="text-sm text-blue-100">+65 3138 1666</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3">
                                        <span className="text-2xl">🌐</span>
                                        <div className="text-left">
                                            <p className="font-semibold">Website</p>
                                            <p className="text-sm text-blue-100">www.gleadsglobal.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="mt-8 pt-6 border-t border-white border-opacity-30 text-center">
                            <p className="text-blue-100 text-sm mb-2">Certifications & Compliance</p>
                            <div className="flex justify-center space-x-4">
                                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">ISO/IEC 27001</span>
                                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">UEN: 202231106G</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center text-blue-100 text-sm">
                <p>© 2025 GLEADS Pte. Ltd. All rights reserved.</p>
                <p className="mt-1">Thank you for choosing Gleads as your marketing partner</p>
            </div>
        </div>
    );
}