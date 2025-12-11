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

// Component for table header
const TableHeader = () => (
  <thead>
    <tr className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <th className="text-left p-3 font-bold border border-blue-700" style={{ width: '50%' }}>
        THÔNG TIN DỊCH VỤ
        <div className="text-xs font-normal text-blue-100 mt-0.5">Service Information</div>
      </th>
      <th className="text-center p-3 font-bold border border-blue-700" style={{ width: '25%' }}>
        THỜI GIAN
        <div className="text-xs font-normal text-blue-100 mt-0.5">Timeline</div>
      </th>
      <th className="text-right p-3 font-bold border border-blue-700" style={{ width: '25%' }}>
        CHI PHÍ (VNĐ)
        <div className="text-xs font-normal text-blue-100 mt-0.5">Cost</div>
      </th>
    </tr>
  </thead>
);

// Component for page header
const PageHeader = ({ pageNum }: { pageNum: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3">
      <div>
        <h1 className="text-xl font-bold text-blue-600">GLEADS</h1>
        <p className="text-xs text-gray-600">Marketing & Communications Agency</p>
      </div>
      <div className="text-right text-xs text-gray-600">
        <p>Page {pageNum}</p>
      </div>
    </div>
  </div>
);

// Component for table row
const TableRow = ({ item, index }: { item: Item; index: number }) => (
  <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
    <td className="p-3 border border-gray-300 align-top" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
      <p className="font-bold text-gray-900 mb-1 text-sm" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
        {item.service || `Dịch vụ ${index + 1}`}
      </p>
      <p className="text-xs text-gray-600 leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
        {item.description || 'Mô tả dịch vụ chi tiết'}
      </p>
    </td>
    <td className="p-3 border border-gray-300 text-center align-top" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
      <p className="text-gray-900 text-sm">{item.timeline || 'N/A'}</p>
    </td>
    <td className="p-3 border border-gray-300 text-right align-top" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
      <p className="font-bold text-gray-900 text-sm">
        {Number(item.cost || 0).toLocaleString('vi-VN')}
      </p>
    </td>
  </tr>
);

export default function QuotePage({
  quoteNumber,
  quoteDate,
  validUntil,
  items,
  total,
  clientCompany,
}: QuotePageProps) {
  // Constants for page layout (in mm)
  const PAGE_HEIGHT_MM = 297;
  const PADDING_MM = 12.7; // 48px ≈ 12.7mm
  const HEADER_HEIGHT_MM = 25;
  const FOOTER_HEIGHT_MM = 20;
  const TITLE_SECTION_HEIGHT_MM = 40; // Title + quote info on first page
  const TABLE_HEADER_HEIGHT_MM = 18;
  const NOTE_HEIGHT_MM = 22;
  const TOTAL_ROW_HEIGHT_MM = 18;
  const SAFETY_MARGIN_MM = 10; // Extra margin for safety

  // Available height for table rows (conservative)
  const FIRST_PAGE_AVAILABLE_HEIGHT = PAGE_HEIGHT_MM - (PADDING_MM * 2) - HEADER_HEIGHT_MM - TITLE_SECTION_HEIGHT_MM - TABLE_HEADER_HEIGHT_MM - FOOTER_HEIGHT_MM - NOTE_HEIGHT_MM - TOTAL_ROW_HEIGHT_MM - SAFETY_MARGIN_MM;
  const OTHER_PAGE_AVAILABLE_HEIGHT = PAGE_HEIGHT_MM - (PADDING_MM * 2) - HEADER_HEIGHT_MM - TABLE_HEADER_HEIGHT_MM - FOOTER_HEIGHT_MM - SAFETY_MARGIN_MM;

  // Estimate row height based on description length
  // More conservative estimate to avoid overflow
  const estimateRowHeight = (item: Item): number => {
    const serviceNameHeight = 10; // mm for service name + margin
    const description = item.description || '';
    // Count newlines and estimate wrapped lines
    const explicitLines = (description.match(/\n/g) || []).length + 1;
    const charsPerLine = 50; // Conservative estimate (lower than 60)
    const wrappedLines = Math.ceil(description.length / charsPerLine);
    const totalLines = Math.max(explicitLines, wrappedLines);
    const descriptionHeight = totalLines * 5.5; // 5.5mm per line (more spacing)
    const padding = 8; // top + bottom padding
    return serviceNameHeight + descriptionHeight + padding;
  };

  // Distribute items across pages
  const pages: { items: Item[]; isFirstPage: boolean; isLastPage: boolean }[] = [];
  let currentPageItems: Item[] = [];
  let currentPageHeight = 0;
  let availableHeight = FIRST_PAGE_AVAILABLE_HEIGHT;

  items.forEach((item, index) => {
    const rowHeight = estimateRowHeight(item);

    // Check if row fits in current page
    if (currentPageHeight + rowHeight > availableHeight && currentPageItems.length > 0) {
      // Save current page and start new page
      pages.push({
        items: currentPageItems,
        isFirstPage: pages.length === 0,
        isLastPage: false,
      });
      currentPageItems = [item];
      currentPageHeight = rowHeight;
      availableHeight = OTHER_PAGE_AVAILABLE_HEIGHT;
    } else {
      // Add to current page
      currentPageItems.push(item);
      currentPageHeight += rowHeight;
    }
  });

  // Add last page
  if (currentPageItems.length > 0) {
    pages.push({
      items: currentPageItems,
      isFirstPage: pages.length === 0,
      isLastPage: true,
    });
  }

  // Mark last page
  if (pages.length > 0) {
    pages[pages.length - 1].isLastPage = true;
  }

  const pageComponents = [];
  let itemIndexOffset = 0;

  for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    const page = pages[pageIndex];
    const isFirstPage = page.isFirstPage;
    const isLastPage = page.isLastPage;

    pageComponents.push(
      <div key={pageIndex} className={`quote-page-start ${isFirstPage ? 'first-quote-page' : ''} w-[210mm] h-[297mm] bg-white p-12 flex flex-col`}>
        {/* Page Header */}
        <PageHeader pageNum={3 + pageIndex} />

        {/* Title - Only on first page */}
        {isFirstPage && (
          <>
            <div className="mb-5">
              <h2 className="text-3xl font-bold text-gray-900">BÁO GIÁ CHI TIẾT</h2>
              <p className="text-lg text-gray-600 mt-1">Detailed Quotation</p>
            </div>

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
          </>
        )}

        {/* Quote Table */}
        <div className="flex-1 mb-5">
          <table className="w-full border-collapse text-sm quote-table" style={{ tableLayout: 'fixed' }}>
            <TableHeader />
            <tbody>
              {page.items.map((item, index) => (
                <TableRow key={item.id} item={item} index={itemIndexOffset + index} />
              ))}

              {/* Total Row - Only on last page */}
              {isLastPage && (
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 total-row" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
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
              )}
            </tbody>
          </table>
        </div>

        {/* Note - Only on last page */}
        {isLastPage && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded quote-note mb-4" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
            <p className="text-xs text-gray-700">
              <strong>Lưu ý:</strong> Báo giá trên là ước tính dựa trên thông tin hiện tại.
              Chi phí cuối cùng có thể thay đổi tùy thuộc vào phạm vi công việc thực tế và
              các yêu cầu bổ sung từ khách hàng.
            </p>
          </div>
        )}

        {/* Footer - pushed to bottom */}
        <div className="mt-auto border-t-2 border-gray-200 pt-3">
          <div className="flex justify-between items-center text-xs text-gray-600">
            <p>© 2025 GLEADS Pte. Ltd. All rights reserved.</p>
            <p>www.gleadsglobal.com | service@gleadsglobal.com</p>
          </div>
        </div>
      </div>
    );

    itemIndexOffset += page.items.length;
  }

  return <>{pageComponents}</>;
}
