interface Item {
  id: number;
  service: string;
  description: string;
  timeline: string;
  cost: number;
}

interface QuotePageProps {
  quoteNumber: string;
  quoteDate: string;
  validUntil: string;
  items: Item[];
  total: number;
  clientCompany: string;
}

export default function QuotePage({
  quoteNumber,
  quoteDate,
  validUntil,
  items,
  total,
  clientCompany,
}: QuotePageProps) {
  return (
    <div className="page-break w-[210mm] h-[297mm] bg-white px-12 py-8 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3 mb-5">
          <div>
            <h1 className="text-xl font-bold text-blue-600">GLEADS</h1>
            <p className="text-xs text-gray-600">Marketing & Communications Agency</p>
          </div>
          <div className="text-right text-xs text-gray-600">
            <p>Page 3</p>
          </div>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">BÁO GIÁ CHI TIẾT</h2>
            <p className="text-lg text-gray-600 mt-1">Detailed Quotation</p>
          </div>
          <div className="text-right">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg">
              <p className="text-xs">Mã báo giá</p>
              <p className="text-base font-bold">{quoteNumber}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1">

      {/* Quote Info */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Khách hàng</p>
          <p className="font-bold text-gray-900 text-sm">{clientCompany || 'Tên công ty'}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Ngày báo giá</p>
          <p className="font-bold text-gray-900 text-sm">
            {new Date(quoteDate).toLocaleDateString('vi-VN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Hiệu lực đến</p>
          <p className="font-bold text-gray-900 text-sm">
            {validUntil
              ? new Date(validUntil).toLocaleDateString('vi-VN', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
              : 'N/A'}
          </p>
        </div>
      </div>

      {/* Quote Table */}
      <div className="mb-5">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <th className="text-left p-3 font-bold border border-blue-700">
                THÔNG TIN DỊCH VỤ
                <div className="text-xs font-normal text-blue-100 mt-0.5">Service Information</div>
              </th>
              <th className="text-center p-3 font-bold border border-blue-700 w-32">
                THỜI GIAN
                <div className="text-xs font-normal text-blue-100 mt-0.5">Timeline</div>
              </th>
              <th className="text-right p-3 font-bold border border-blue-700 w-40">
                CHI PHÍ (VNĐ)
                <div className="text-xs font-normal text-blue-100 mt-0.5">Cost</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-300">
                  <p className="font-bold text-gray-900 mb-0.5 text-sm">
                    {item.service || `Dịch vụ ${index + 1}`}
                  </p>
                  <p className="text-xs text-gray-600">
                    {item.description || 'Mô tả dịch vụ chi tiết'}
                  </p>
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  <p className="text-gray-900 text-sm">{item.timeline || 'N/A'}</p>
                </td>
                <td className="p-3 border border-gray-300 text-right">
                  <p className="font-bold text-gray-900 text-sm">
                    {Number(item.cost || 0).toLocaleString('vi-VN')}
                  </p>
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <td className="p-3 border border-gray-300 font-bold text-gray-900" colSpan={2}>
                TỔNG CHI PHÍ DỰ KIẾN
                <div className="text-xs font-normal text-gray-600">Total Estimated Cost</div>
              </td>
              <td className="p-3 border border-gray-300 text-right">
                <p className="text-xl font-bold text-blue-600">
                  {total.toLocaleString('vi-VN')} VNĐ
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
        <p className="text-xs text-gray-700">
          <strong>Lưu ý:</strong> Báo giá trên là ước tính dựa trên thông tin hiện tại. 
          Chi phí cuối cùng có thể thay đổi tùy thuộc vào phạm vi công việc thực tế và 
          các yêu cầu bổ sung từ khách hàng.
        </p>
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
