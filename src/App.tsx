import { useState, useRef } from 'react';
import { FileText, Download } from 'lucide-react';
import QuoteForm from './components/QuoteForm';
import QuotePreview from './components/QuotePreview';

function App() {
  // Proposal Details
  const [proposalTitle, setProposalTitle] = useState('BÁO GIÁ GIẢI PHÁP TRUYỀN THÔNG THƯƠNG HIỆU TOÀN DIỆN');
  const [solutionOverview, setSolutionOverview] = useState('Giải pháp Digital Marketing toàn diện giúp nâng tầm hiện diện thương hiệu và thúc đẩy tăng trưởng bền vững thông qua SEO, Quảng cáo Hiệu suất, Content Marketing và Thiết kế Sáng tạo.');

  // Client Information
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Quote Details
  const [quoteDate, setQuoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [validUntil, setValidUntil] = useState('');

  // Service Items
  const [items, setItems] = useState<Array<{
    id: number;
    service: string;
    description: string;
    timeline: string;
    cost: number;
    discountType?: 'percentage' | 'fixed' | 'none';
    discountValue?: number;
  }>>([
    { id: 1, service: '', description: '', timeline: '', cost: 0, discountType: 'none', discountValue: 0 }
  ]);

  // Service Type Selection
  const [serviceType, setServiceType] = useState('custom');

  // Service Templates
  const serviceTemplates = {
    content: {
      aboutGleads: `DỊCH VỤ NỘI DUNG CỦA GLEADS.

GLEADS cung cấp dịch vụ nội dung toàn diện phục vụ cho đa ngành nghề, bao gồm viết bài SEO, nội dung mạng xã hội, nội dung website, và kịch bản video. Mục tiêu là giúp doanh nghiệp xây dựng thương hiệu, quảng bá sản phẩm và tạo dựng hệ thống truyền thông ổn định, dễ mở rộng về lâu dài. Dịch vụ phù hợp với các doanh nghiệp vừa và nhỏ cần đội ngũ đồng hành sát sao trong từng giai đoạn tăng trưởng.

GIẢI PHÁP NỘI DUNG LINH HOẠT CHO MỌI NGÀNH NGHỀ.

• Dịch vụ nội dung. GLEADS cung cấp dịch vụ viết bài quảng bá thương hiệu, mô tả sản phẩm, dịch vụ và phát triển nội dung website, mạng xã hội, kịch bản video cho nhiều lĩnh vực ngành nghề.

• Giải pháp cho SEO và quảng cáo. GLEADS phát triển nội dung phù hợp với chiến dịch truyền thông, quảng cáo tìm kiếm, định vị thương hiệu và thói quen tiếp cận thông tin của khách hàng mục tiêu, tối ưu theo chuẩn công cụ tìm kiếm, đồng thời đảm bảo dễ hiểu và hấp dẫn đối với người đọc.

• Bài viết mẫu về giới thiệu doanh nghiệp, giới thiệu dịch vụ, mô tả sản phẩm, bài PR đăng báo, bài mạng xã hội, kịch bản video ngắn phục vụ quảng cáo.

• Lồng ghép thông điệp thương hiệu. Không chỉ mô tả sản phẩm và dịch vụ, GLEADS giúp truyền tải câu chuyện thương hiệu theo chủ đề, theo phân khúc, theo mùa bán hàng, dịp lễ hội.

DỊCH VỤ BÀI VIẾT SEO ĐA LĨNH VỰC.

GLEADS đã hợp tác với nhiều doanh nghiệp trong các lĩnh vực, ngành nghề khác nhau, phát triển theo chuẩn công cụ tìm kiếm, đồng thời đảm bảo dễ hiểu và hấp dẫn đối với người đọc.

• Tối ưu từ khóa tìm kiếm về thương hiệu, sản phẩm, dịch vụ. GLEADS xây dựng nội dung theo chiến lược từ khóa, đảm bảo bài viết xuất hiện trên các công cụ tìm kiếm khi khách hàng tìm đọc.

• Bám sát nhu cầu tìm kiếm của khách hàng, đối tác tiềm năng. Đội ngũ biên tập viên GLEADS am hiểu nhiều lĩnh vực khó như pháp chế, tài chính, giáo dục, sản xuất công nghiệp.

• Đảm bảo khả năng triển khai SEO nhanh khi cần, trong đó hệ thống bài viết được GLEADS phát triển trên tiền đề tối ưu tìm kiếm cho doanh nghiệp, nhãn hàng.

GLEADS cung cấp giải pháp phát triển nội dung toàn diện cho doanh nghiệp thuộc nhiều lĩnh vực khác nhau. Chúng tôi xây dựng hệ thống bài viết chuẩn SEO, kịch bản video, nội dung mạng xã hội, thông tin giới thiệu thương hiệu và sản phẩm giúp tăng khả năng tiếp cận và giữ chân khách hàng.`,
      serviceNotes: `Bảng giá trên đây mang tính tham khảo cho các bài viết với nội dung chuẩn SEO, bố cục rõ ràng, phù hợp với các kênh truyền thông số và có khả năng tiếp cận tốt trên công cụ tìm kiếm. GLEADS cung cấp nhiều tùy chỉnh đa dạng hơn cho các nội dung chuyên sâu như bài viết chuyên ngành, bài PR, nội dung cho chiến dịch quảng cáo, nội dung bán hàng, và nội dung truyền thông thương hiệu. Chúng tôi cũng triển khai các gói dịch vụ viết bài định kỳ, tối ưu hóa nội dung theo từng giai đoạn phát triển của doanh nghiệp và tích hợp với các nền tảng tiếp thị trực tuyến. Quý khách vui lòng liên hệ đại diện chăm sóc khách hàng của GLEADS để được tư vấn chi tiết và hỗ trợ nhanh chóng.

1. Chi phí đăng bài trên website không được bao gồm trong gói cơ bản. Nếu khách hàng có nhu cầu đăng bài, mức phí áp dụng là VND 30,000 mỗi bài và chỉ áp dụng khi khách hàng đặt số lượng bài viết đạt yêu cầu. Dịch vụ này không áp dụng cho trường hợp đăng từng bài lẻ.

2. Về yêu cầu thiết kế hình ảnh cho bài viết, nếu khách hàng có nhu cầu sử dụng hình ảnh tự thiết kế, chi phí sẽ được báo giá riêng. Mức phí tham khảo là VND 100,000 cho mỗi hình nếu sử dụng hình ảnh thiết kế từ vector và VND 80,000 mỗi hình nếu sử dụng hình ảnh thực tế đã qua chỉnh sửa.

3. Số lần hỗ trợ chỉnh sửa nội dung sẽ phụ thuộc vào từng gói dịch vụ mà khách hàng đã đặt. Yêu cầu chỉnh sửa không được vượt quá ba mươi phần trăm nội dung bài viết gốc và chỉ có hiệu lực trong vòng 14 ngày kể từ ngày bàn giao sản phẩm.

5. Một số ngành nghề đặc thù như dịch vụ luật, pháp chế, y học, sinh học, hàng không vũ trụ và cơ khí có tính chất chuyên môn cao với hệ thống thuật ngữ phức tạp. Do đó, chi phí thực hiện nội dung trong các lĩnh vực này có thể có sự điều chỉnh phù hợp với độ khó và yêu cầu nghiên cứu chuyên sâu.`,
      warrantyPolicy: `2. Chính sách hỗ trợ dịch vụ.
GLEADS áp dụng chính sách hỗ trợ dịch vụ soạn thảo, phát triển, hiệu chỉnh nội dung truyền thông, quảng cáo theo điều khoản hợp đồng được ký kết giữa hai bên tính từ ngày khách hàng duyệt nội dung sau cùng. Trong suốt thời gian bảo hành, GLEADS đảm bảo nội dung đáp ứng yêu cầu đưa ra, khắc phục nhanh chóng các lỗi nội dung phát sinh không đúng với nội dung đã bàn giao.`
    },
    design: {
      aboutGleads: `DỊCH VỤ THIẾT KẾ CỦA GLEADS.

Dịch vụ thiết kế đồ họa từ GLEADS được xây dựng nhằm phục vụ mọi loại hình doanh nghiệp có nhu cầu phát triển nền tảng trực tuyến chuyên nghiệp. Chúng tôi thiết kế đồ họa dựa trên nhu cầu thực tế của doanh nghiệp, giúp hiển thị thông tin rõ ràng, tăng độ tin cậy với khách hàng, tối ưu hiệu quả bán hàng và truyền thông. GLEADS cung cấp giải pháp thiết kế giao diện hiện đại, dễ sử dụng, tích hợp đầy đủ chức năng như giới thiệu doanh nghiệp, sản phẩm dịch vụ, tin tức, biểu mẫu liên hệ, và tích hợp mạng xã hội, tạo nên hệ sinh thái số đồng bộ và dễ vận hành.

GIẢI PHÁP WEBSITE TOÀN DIỆN.

• Thiết kế website đẹp và dễ sử dụng. GLEADS tạo giao diện rõ ràng, hiện đại, dễ thao tác trên cả điện thoại và máy tính, giúp khách hàng dễ dàng tìm kiếm thông tin và đặt hàng trực tuyến.

• Thiết lập website trong vòng 07 ngày. GLEADS có sẵn mẫu giao diện phù hợp với nhiều ngành nghề giúp doanh nghiệp sở hữu một website hoàn chỉnh chỉ trong một tuần làm việc.

• Chăm sóc và cập nhật website định kỳ. Đội ngũ kỹ thuật hỗ trợ đăng nội dung mới, chỉnh sửa thông tin khi cần và theo dõi hệ thống để đảm bảo website luôn an toàn và vận hành ổn định.

• Tối ưu công cụ tìm kiếm và hỗ trợ quảng bá. GLEADS giúp website xuất hiện trên Google và các mạng xã hội thông qua cấu trúc chuẩn SEO và nội dung thân thiện với người dùng.

GIAO DIỆN MẪU VÀ TÍNH NĂNG NỔI BẬT.

GLEADS đã hợp tác với nhiều doanh nghiệp trong các lĩnh vực, ngành nghề khác nhau, thiết kế nhiều giao diện website tinh tế, dễ nhìn tạo ra ấn tượng tốt ngay từ lần truy cập đầu tiên.

• Website tích hợp danh mục sản phẩm, dịch vụ, dự án rõ ràng. Website dễ dùng cho phép doanh nghiệp cập nhật sản phẩm, dịch vụ, thông tin các dự án và giá cả nhanh chóng khi có thay đổi.

• Khách hàng có thể đặt hàng trực tiếp trên website. Khách hàng nhận xác nhận tự động giúp tiết kiệm thời gian cho cả doanh nghiệp và khách cá nhân, khách doanh nghiệp.

• Hệ thống thanh toán và giao hàng được tích hợp linh hoạt. Bộ phận bán hàng dễ dàng nhận đơn và xử lý thanh toán nhanh chóng từ khách hàng.

GLEADS thực hiện quy trình triển khai bài bản đảm bảo nhà hàng sở hữu website chất lượng cao chỉ trong thời gian ngắn với đầy đủ tính năng cần thiết để vận hành hiệu quả.`,
      serviceNotes: `- Lưu ý:

• Phạm vi chỉnh sửa: Có thể thay đổi: màu sắc, kiểu chữ, cách sắp xếp. Không thay đổi: đường nét, kiểu dáng logo hoặc vẽ thêm hình bổ sung.

• Nếu quá số lần hiệu chỉnh giới hạn, mỗi lần chỉnh sửa tiếp theo tính thêm 20% phí dịch vụ

• Thời gian làm việc: Không bao gồm thứ 7, chủ nhật, ngày lễ và thời gian phản hồi, chỉnh sửa.

• Bàn giao file thiết kế gồm: File gốc thiết kế (Al/Figma), file in ấn (PDF), file ảnh tĩnh (PNG)

• Giá chưa bao gồm 10% VAT.`,
      warrantyPolicy: '- Chỉnh sửa thiết kế miễn phí đến 3 lần/sản phẩm\n- Cung cấp đầy đủ file nguồn (AI, PSD, PDF)\n- Hỗ trợ resize và adapt cho các platform khác nhau\n- Lưu trữ file thiết kế trong 24 tháng'
    },
    website: {
      aboutGleads: `DỊCH VỤ WEBSITE CỦA GLEADS.

Dịch vụ thiết kế website từ GLEADS được xây dựng nhằm phục vụ mọi loại hình doanh nghiệp có nhu cầu phát triển nền tảng trực tuyến chuyên nghiệp. Chúng tôi thiết kế website dựa trên nhu cầu thực tế của doanh nghiệp, giúp hiển thị thông tin rõ ràng, tăng độ tin cậy với khách hàng, tối ưu hiệu quả bán hàng và truyền thông. GLEADS cung cấp giải pháp thiết kế giao diện hiện đại, dễ sử dụng, tích hợp đầy đủ chức năng như giới thiệu doanh nghiệp, sản phẩm dịch vụ, tin tức, biểu mẫu liên hệ, và tích hợp mạng xã hội, tạo nên hệ sinh thái số đồng bộ và dễ vận hành.

GIẢI PHÁP WEBSITE TOÀN DIỆN.

• Thiết kế website đẹp và dễ sử dụng. GLEADS tạo giao diện rõ ràng, hiện đại, dễ thao tác trên cả điện thoại và máy tính, giúp khách hàng dễ dàng tìm kiếm thông tin và đặt hàng trực tuyến.

• Thiết lập website trong vòng 07 ngày. GLEADS có sẵn mẫu giao diện phù hợp với nhiều ngành nghề giúp doanh nghiệp sở hữu một website hoàn chỉnh chỉ trong một tuần làm việc.

• Chăm sóc và cập nhật website định kỳ. Đội ngũ kỹ thuật hỗ trợ đăng nội dung mới, chỉnh sửa thông tin khi cần và theo dõi hệ thống để đảm bảo website luôn an toàn và vận hành ổn định.

• Tối ưu công cụ tìm kiếm và hỗ trợ quảng bá. GLEADS giúp website xuất hiện trên Google và các mạng xã hội thông qua cấu trúc chuẩn SEO và nội dung thân thiện với người dùng.

GIAO DIỆN MẪU VÀ TÍNH NĂNG NỔI BẬT.

GLEADS đã hợp tác với nhiều doanh nghiệp trong các lĩnh vực, ngành nghề khác nhau, thiết kế nhiều giao diện website tinh tế, dễ nhìn tạo ra ấn tượng tốt ngay từ lần truy cập đầu tiên.

• Website tích hợp danh mục sản phẩm, dịch vụ, dự án rõ ràng dễ dùng cho phép doanh nghiệp cập nhật sản phẩm, dịch vụ, thông tin các dự án và giá cả nhanh chóng khi có thay đổi.

• Khách hàng có thể đặt hàng trực tiếp trên website và nhận xác nhận tự động giúp tiết kiệm thời gian cho cả doanh nghiệp và khách cá nhân, khách doanh nghiệp.

• Hệ thống thanh toán và giao hàng được tích hợp linh hoạt giúp bộ phận bán hàng dễ dàng nhận đơn và xử lý thanh toán nhanh chóng từ khách hàng.

GLEADS thực hiện quy trình triển khai bài bản đảm bảo nhà hàng sở hữu website chất lượng cao chỉ trong thời gian ngắn với đầy đủ tính năng cần thiết để vận hành hiệu quả.`,
      serviceNotes: `

• Thời gian thực hiện website là từ 07 đến 10 ngày tùy thuộc vào tình hình thực tế và tốc độ phản hồi của khách hàng trong quá trình trao đổi.

• Giá dịch vụ được tính bằng đồng Việt Nam và việc triển khai sẽ được tiến hành tại địa điểm mà hai bên đã thống nhất trước đó.

• GLEADS bảo hành toàn bộ hệ thống website trong thời gian 12 tháng kể từ ngày bàn giao hoàn tất, với điều kiện khách hàng hoặc nhà quản trị website không có thay đổi hoặc tác động đến mã nguồn.

• Hỗ trợ kỹ thuật được cung cấp trong giờ hành chính từ thứ hai đến thứ sáu và cam kết xử lý sự cố trong vòng 24 giờ làm việc.

• Báo giá trên có hiệu lực sử dụng trong vòng 30 ngày kể từ ngày gửi đến khách hàng.

• Báo giá không bao gồm chi phí biên soạn nội dung văn bản cho các trang trên website.

• Báo giá chưa bao gồm dịch vụ nhập liệu các bài viết hoặc thông tin sản phẩm lên hệ thống quản trị của website.`,
      warrantyPolicy: `GLEADS áp dụng chính sách bảo hành dịch vụ thiết kế website theo điều khoản hợp đồng được ký kết giữa hai bên tính từ ngày website chính thức được đưa vào sử dụng. Trong suốt thời gian bảo hành, GLEADS đảm bảo hệ thống vận hành ổn định khắc phục nhanh chóng các lỗi kỹ thuật phát sinh và hỗ trợ chỉnh sửa các lỗi hiển thị hoặc lỗi chức năng không đúng với nội dung đã bàn giao.`
    },
    custom: {
      aboutGleads: 'GLEADS là công ty truyền thông và marketing tổng hợp, cung cấp các giải pháp sáng tạo và chiến lược hiệu quả cho các thương hiệu. Chúng tôi tập hợp đội ngũ chuyên gia giàu kinh nghiệm, luôn đồng hành cùng doanh nghiệp trong việc xây dựng hình ảnh và nâng cao nhận diện thương hiệu.',
      serviceNotes: 'GLEADS cam kết cung cấp dịch vụ chuyên nghiệp, minh bạch và hiệu quả cao. Đội ngũ chuyên gia của chúng tôi sẽ đồng hành cùng doanh nghiệp trong suốt quá trình thực hiện dự án.',
      warrantyPolicy: '- Bảo hành kỹ thuật trong vòng 12 tháng\n- Hỗ trợ sửa lỗi và cập nhật miễn phí\n- Tư vấn và training sử dụng'
    }
  };

  // Terms and Conditions
  const [aboutGleads, setAboutGleads] = useState(serviceTemplates.custom.aboutGleads);
  const [serviceNotes, setServiceNotes] = useState(serviceTemplates.custom.serviceNotes);
  const [warrantyPolicy, setWarrantyPolicy] = useState(serviceTemplates.custom.warrantyPolicy);
  const [paymentTerms, setPaymentTerms] = useState('- Đợt 1: 40% khi ký hợp đồng\n- Đợt 2: 30% khi hoàn thành 50% dự án\n- Đợt 3: 30% khi nghiệm thu và bàn giao');
  const [bankInfo, setBankInfo] = useState('Ngân hàng: Techcombank, chi nhánh Phú Mỹ Hưng\nTên tài khoản: CÔNG TY CỔ PHẦN GLEADS\nSố tài khoản: 1913 2044 509 568');

  // Page Headings
  const [aboutPageTitle, setAboutPageTitle] = useState('VỀ GLEADS');
  const [quotePageTitle, setQuotePageTitle] = useState('BÁO GIÁ CHI TIẾT.');
  const [termsPageTitle, setTermsPageTitle] = useState('GHI CHÚ và CHÍNH SÁCH BẢO HÀNH.');
  const [paymentPageTitle, setPaymentPageTitle] = useState('THANH TOÁN và XÁC NHẬN.');

  // Handle service type change
  const handleServiceTypeChange = (type: string) => {
    setServiceType(type);
    if (type !== 'custom') {
      const template = serviceTemplates[type as keyof typeof serviceTemplates];
      setAboutGleads(template.aboutGleads);
      setServiceNotes(template.serviceNotes);
      setWarrantyPolicy(template.warrantyPolicy);
    }
  };

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), service: '', description: '', timeline: '', cost: 0, discountType: 'none', discountValue: 0 }
    ]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: string, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const total = items.reduce((sum, item) => {
    const cost = Number(item.cost) || 0;
    let discount = 0;
    if (item.discountType === 'percentage') {
      discount = (cost * (Number(item.discountValue) || 0)) / 100;
    } else if (item.discountType === 'fixed') {
      discount = Number(item.discountValue) || 0;
    }
    return sum + (cost - discount);
  }, 0);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;

    const element = previewRef.current;

    try {
      // Wait for images to load
      const images = element.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // Wait for background images to render
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Import jsPDF and html2canvas
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;

      // Get all page elements
      const pages = element.querySelectorAll('.page-break');

      if (pages.length === 0) {
        throw new Error('No pages found');
      }

      // Create new PDF document
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      });

      // Process each page
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;

        // Convert page to canvas
        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: false,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff',
          imageTimeout: 15000,
          windowWidth: page.scrollWidth,
          windowHeight: page.scrollHeight
        });

        // Convert canvas to image
        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        // Add new page if not first
        if (i > 0) {
          pdf.addPage();
        }

        // Calculate dimensions to fit A4
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      }

      // Save PDF
      const filename = `GLEADS_Proposal_${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.pdf`;
      pdf.save(filename);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Có lỗi khi tạo PDF. Vui lòng thử lại.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 border-b border-blue-800 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">GLEADS Proposal Generator</h1>
                <p className="text-blue-100 text-sm">Professional Marketing Proposal Template</p>
              </div>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium shadow-lg"
            >
              <Download className="w-5 h-5" />
              Tải PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuoteForm
            proposalTitle={proposalTitle}
            setProposalTitle={setProposalTitle}
            solutionOverview={solutionOverview}
            setSolutionOverview={setSolutionOverview}
            clientName={clientName}
            setClientName={setClientName}
            clientCompany={clientCompany}
            setClientCompany={setClientCompany}
            clientAddress={clientAddress}
            setClientAddress={setClientAddress}
            clientEmail={clientEmail}
            setClientEmail={setClientEmail}
            clientPhone={clientPhone}
            setClientPhone={setClientPhone}
            quoteDate={quoteDate}
            setQuoteDate={setQuoteDate}
            validUntil={validUntil}
            setValidUntil={setValidUntil}
            items={items}
            updateItem={updateItem}
            addItem={addItem}
            removeItem={removeItem}
            serviceType={serviceType}
            handleServiceTypeChange={handleServiceTypeChange}
            aboutGleads={aboutGleads}
            setAboutGleads={setAboutGleads}
            serviceNotes={serviceNotes}
            setServiceNotes={setServiceNotes}
            warrantyPolicy={warrantyPolicy}
            setWarrantyPolicy={setWarrantyPolicy}
            paymentTerms={paymentTerms}
            setPaymentTerms={setPaymentTerms}
            bankInfo={bankInfo}
            setBankInfo={setBankInfo}
            aboutPageTitle={aboutPageTitle}
            setAboutPageTitle={setAboutPageTitle}
            quotePageTitle={quotePageTitle}
            setQuotePageTitle={setQuotePageTitle}
            termsPageTitle={termsPageTitle}
            setTermsPageTitle={setTermsPageTitle}
            paymentPageTitle={paymentPageTitle}
            setPaymentPageTitle={setPaymentPageTitle}
          />

          <QuotePreview
            ref={previewRef}
            proposalTitle={proposalTitle}
            solutionOverview={solutionOverview}
            clientName={clientName}
            clientCompany={clientCompany}
            clientAddress={clientAddress}
            clientEmail={clientEmail}
            clientPhone={clientPhone}
            quoteDate={quoteDate}
            validUntil={validUntil}
            items={items}
            total={total}
            aboutGleads={aboutGleads}
            serviceNotes={serviceNotes}
            warrantyPolicy={warrantyPolicy}
            paymentTerms={paymentTerms}
            bankInfo={bankInfo}
            serviceType={serviceType}
            aboutPageTitle={aboutPageTitle}
            quotePageTitle={quotePageTitle}
            termsPageTitle={termsPageTitle}
            paymentPageTitle={paymentPageTitle}
          />
        </div>
      </main>

      <style>{`
        /* Normal view styles */
        .page-break {
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
          background: white;
        }
        
        /* Ensure all colors and backgrounds render correctly */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
          
          .lg\\:grid-cols-2 > *:first-child {
            display: none !important;
          }
          
          .page-break {
            page-break-after: always;
            break-after: page;
            page-break-before: auto;
            break-before: auto;
            margin: 0 !important;
            box-shadow: none !important;
            display: block;
            position: relative;
            overflow: visible;
          }
          
          @page {
            margin: 0;
            size: A4 portrait;
          }
          
          /* Prevent page breaks inside important elements */
          .mb-8, .mb-12, .space-y-4 > div, .space-y-6 > div,
          table, tr, .border, .rounded-lg, .rounded-xl, .rounded-2xl,
          .bg-gradient-to-br, .bg-gradient-to-r,
          [class*="border-l-4"] {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep service boxes together */
          .grid > div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep table rows together */
          tbody tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep sections together */
          h2, h3, h4 {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          
          /* Keep signature section together */
          .grid-cols-2 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Ensure gradients and backgrounds print correctly */
          [class*="bg-gradient"],
          [class*="bg-blue"],
          [class*="bg-indigo"],
          [class*="bg-purple"],
          [class*="bg-green"],
          [class*="bg-orange"],
          [class*="bg-cyan"],
          [class*="bg-gray"],
          [class*="bg-yellow"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Ensure text colors print correctly */
          [class*="text-white"],
          [class*="text-blue"],
          [class*="text-gray"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
