import gleadsLogo from '../assets/gleads logo.webp';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactPageProps {
    companyEmail: string;
}

export default function ContactPage({ companyEmail }: ContactPageProps) {
    const { t } = useLanguage();

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
                background: 'linear-gradient(135deg, #F6581C 0%, #FF895C 100%)',
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
                        {/* <p className="text-xs text-blue-100">Marketing & Communications Agency</p> */}
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-2">{t.contactPage.title}</h2>
                    {/* <p className="text-xl text-blue-100">Contact Information</p> */}
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20 max-w-4xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Company Info */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">{t.contactPage.companyName}</h3>
                                <div className="space-y-3 text-white text-left">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">🏢</span>
                                        <div>
                                            <p className="font-semibold">{t.contactPage.singaporeOffice}</p>
                                            <p className="text-sm text-blue-100 ml-0">9 Raffles Place, #29-05, Singapore 048619</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">🏢</span>
                                        <div>
                                            <p className="font-semibold">{t.contactPage.vietnamOffice}</p>
                                            <p className="text-sm text-blue-100 ml-0">39-41 Ngo Thi Bi St., Ho Chi Minh City</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📋</span>
                                        <div>
                                            <p className="font-semibold">{t.contactPage.taxCode}</p>
                                            <p className="text-sm text-blue-100 ml-0">0314736707</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="text-center">
                                <div className="space-y-4 text-white">
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                                        <div></div>
                                        <h3 className="text-2xl font-bold text-white mb-0 text-left">{t.contactPage.contact}</h3>
                                    </div>
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                                        <span className="text-2xl">📧</span>
                                        <div className="text-left">
                                            <p className="font-semibold">{t.contactPage.email}</p>
                                            <p className="text-sm text-blue-100">{companyEmail}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                                        <span className="text-2xl">📞</span>
                                        <div className="text-left">
                                            <p className="font-semibold">{t.contactPage.phone}</p>
                                            <p className="text-sm text-blue-100">(+84)28 6272 2262</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                                        <span className="text-2xl">🌐</span>
                                        <div className="text-left">
                                            <p className="font-semibold">{t.contactPage.website}</p>
                                            <p className="text-sm text-blue-100">www.gleadsglobal.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center text-blue-100 text-sm">
                <p>{t.footer.copyright}</p>
                <p className="mt-1">{t.contactPage.thankYou}</p>
            </div>
        </div>
    );
}