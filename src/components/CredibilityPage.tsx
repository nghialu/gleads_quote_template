import gleadsLogo from '../assets/gleads logo.webp';

export default function CredibilityPage() {
    return (
        <div className="page-break w-[210mm] h-[297mm] bg-white p-12 flex flex-col">
            {/* Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3">
                    <div>
                        <img
                            src={gleadsLogo}
                            alt="Gleads Logo"
                            className="h-8 w-auto"
                        />
                        <p className="text-xs text-gray-600">Marketing & Communications Agency</p>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                        <p>Page 5</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
                {/* Stats Section */}
                <div className="mb-8">
                    {/* Tagline */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg mb-8 text-center">
                        <p className="text-base font-bold leading-relaxed tracking-wide">
                            KHÔNG THEO DÒNG CHẢY THỊ TRƯỜNG – GLEADS TẠO LÀN SÓNG<br />
                            TRUYỀN THÔNG ĐỘT PHÁ MANG TÊN BẠN.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-6">
                        {/* Stat 1 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
                                <div className="text-4xl font-black text-blue-600 mb-2">10</div>
                                <div className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                    NĂM KINH NGHIỆM
                                </div>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                                <div className="text-4xl font-black text-green-600 mb-2">200</div>
                                <div className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                    DỰ ÁN THÀNH CÔNG
                                </div>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
                                <div className="text-4xl font-black text-purple-600 mb-2">3.000</div>
                                <div className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                    KHÁCH HÀNG TIN TƯỞNG
                                </div>
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-200">
                                <div className="text-4xl font-black text-orange-600 mb-2">15</div>
                                <div className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                    NGÀNH HÀNG PHỤC VỤ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Partners Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        ĐỐI TÁC & KHÁCH HÀNG TIN TƯỞNG
                    </h2>

                    {/* Brand Logo Grid Placeholder */}
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8">
                        <div className="grid grid-cols-5 gap-6">
                            {[...Array(10)].map((_, index) => (
                                <div
                                    key={index}
                                    className="aspect-square bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                >
                                    <div className="text-center p-2">
                                        <div className="text-gray-400 text-xs font-medium">
                                            LOGO {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Vui lòng thêm logo các brand đã hợp tác vào thư mục assets và cập nhật component
                        </p>
                    </div>
                </div>

                {/* Trust Message */}
                <div className="text-center">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 leading-relaxed">
                            <strong className="text-blue-700">GLEADS</strong> tự hào là đối tác tin cậy của hơn 200 doanh nghiệp
                            trong và ngoài nước. Chúng tôi cam kết mang đến giải pháp marketing hiệu quả,
                            đo lường được và tăng trưởng bền vững cho mọi thương hiệu.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4 border-t-2 border-gray-200 pt-2">
                <div className="text-center text-xs text-gray-500">
                    <p>© 2025 GLEADS Pte. Ltd. All rights reserved. | www.gleadsglobal.com</p>
                </div>
            </div>
        </div>
    );
}
