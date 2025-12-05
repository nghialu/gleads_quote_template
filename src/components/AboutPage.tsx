export default function AboutPage() {
  return (
    <div className="page-break w-[210mm] h-[297mm] bg-white p-12 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3">
          <div>
            <h1 className="text-xl font-bold text-blue-600">GLEADS</h1>
            <p className="text-xs text-gray-600">Marketing & Communications Agency</p>
          </div>
          <div className="text-right text-xs text-gray-600">
            <p>Page 2</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">VỀ GLEADS</h2>
          <p className="text-lg text-gray-600 mt-1">Comprehensive Communications & Marketing Agency</p>
        </div>

      {/* Company Introduction */}
      <div className="mb-5">
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          GLEADS là công ty truyền thông và marketing tổng hợp, cung cấp các giải pháp sáng tạo và 
          chiến lược hiệu quả cho các thương hiệu. Chúng tôi tập hợp đội ngũ chuyên gia giàu kinh nghiệm, 
          luôn đồng hành cùng doanh nghiệp trong việc xây dựng hình ảnh, nâng cao nhận diện thương hiệu 
          và mở rộng ảnh hưởng bền vững trên các nền tảng số.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Với phương châm <strong>"Optimize Digital Journey, Elevate Brand Experience"</strong>, GLEADS 
          cam kết mang đến giá trị thực cho mỗi khách hàng thông qua các dịch vụ chuyên nghiệp và 
          chiến lược marketing đột phá.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">DỊCH VỤ CHÍNH</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* SEO Services */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                01
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">SEO Services</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Giải pháp SEO toàn diện - không chỉ cải thiện thứ hạng mà còn mang lại tăng trưởng thực sự. 
                  Từ SEO tổng thể, SEO từ khóa, SEO audit đến tối ưu hóa YouTube, E-commerce, marketplace 
                  và ngành dịch vụ.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Ads */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                02
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Performance Ads</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Tối ưu hiệu suất - Tăng trưởng bền vững với giải pháp Performance Ads toàn diện. 
                  Chuyên về quảng cáo trên Google, Facebook, TikTok, YouTube, LinkedIn với chiến lược 
                  cá nhân hóa và công nghệ đo lường hiện đại.
                </p>
              </div>
            </div>
          </div>

          {/* Content Service */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                03
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Content Service</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Nội dung không chỉ là từ ngữ - đó là động lực tăng trưởng mạnh mẽ. GLEADS tạo ra 
                  chiến lược nội dung hướng đến hiệu suất, thu hút, tương tác và chuyển đổi khách hàng. 
                  Từ blog SEO, storytelling đến content promotion.
                </p>
              </div>
            </div>
          </div>

          {/* Design Services */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-600">
            <div className="flex items-start gap-3">
              <div className="bg-orange-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                04
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Design Services</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Giải pháp thiết kế toàn diện giúp thương hiệu nổi bật từ cái nhìn đầu tiên. 
                  Từ thiết kế logo, profile công ty, catalog, brochure đến sản xuất TVC, chụp ảnh 
                  sản phẩm và concept art.
                </p>
              </div>
            </div>
          </div>

          {/* Website Design */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border-l-4 border-cyan-600 md:col-span-2">
            <div className="flex items-start gap-3">
              <div className="bg-cyan-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                05
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Website Design</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Thiết kế website chuyên nghiệp, tuân thủ chuẩn UX/UI, tối ưu trải nghiệm người dùng 
                  và hiệu quả chuyển đổi. Chúng tôi xây dựng giao diện bắt mắt, cấu trúc nội dung thông 
                  minh, tương tác dễ dàng và thiết kế sẵn sàng cho SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4 text-center">VƯỢT QUA XU HƯỚNG - GLEADS TẠO RA CHIẾN DỊCH ĐỘT PHÁ</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">5+</div>
            <div className="text-blue-100 text-xs">NĂM KINH NGHIỆM</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-blue-100 text-xs">DỰ ÁN THÀNH CÔNG</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">300+</div>
            <div className="text-blue-100 text-xs">KHÁCH HÀNG TIN TƯỞNG</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">20+</div>
            <div className="text-blue-100 text-xs">NGÀNH NGHỀ PHỤC VỤ</div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className="mt-4 border-t-2 border-gray-200 pt-3">
        <div className="flex justify-between items-center text-xs text-gray-600">
          <p>© 2025 GLEADS Pte. Ltd. All rights reserved.</p>
          <p>www.gleadsglobal.com | service@gleadsglobal.com</p>
        </div>
      </div>
    </div>
  );
}
