export type Language = 'vi' | 'en';

export interface Translations {
    // Cover Page
    coverPage: {
        client: string;
        quoteDate: string;
    };

    // About Page
    aboutPage: {
        pageTitle: string;
        pageNumber: string;
    };

    // Quote Page
    quotePage: {
        pageTitle: string;
        customer: string;
        quoteDate: string;
        validUntil: string;
        noValue: string;
        serviceInfo: string;
        timeline: string;
        cost: string;
        subtotalBeforeDiscount: string;
        subtotal: string;
        discount: string;
        totalEstimatedCost: string;
        totalCost: string;
        vnd: string;
        pageNumber: string;
    };

    // Terms Pages
    termsPage: {
        pageTitle: string;
        serviceNotes: string;
        warrantyPolicy: string;
        pageNumber: string;
    };

    // Payment Page
    paymentPage: {
        pageTitle: string;
        paymentMethod: string;
        bankInfo: string;
        confirmationAndSigning: string;
        clientSignature: string;
        clientConfirmation: string;
        signAndPrint: string;
        companySignature: string;
        companyRepresentative: string;
        signAndStamp: string;
        pageNumber: string;
    };

    // Credibility Page
    credibilityPage: {
        tagline: string;
        yearsExperience: string;
        successfulProjects: string;
        trustedClients: string;
        industriesServed: string;
        partnersAndClients: string;
        logoPlaceholder: string;
        trustMessage: string;
        pageNumber: string;
    };

    // Contact Page
    contactPage: {
        title: string;
        companyName: string;
        singaporeOffice: string;
        vietnamOffice: string;
        taxCode: string;
        contact: string;
        email: string;
        phone: string;
        website: string;
        thankYou: string;
    };

    // Footer
    footer: {
        copyright: string;
        websiteAndEmail: string;
    };

    // Form
    form: {
        proposalDetails: string;
        proposalTitle: string;
        solutionOverview: string;
        clientInfo: string;
        clientCompany: string;
        companyInfo: string;
        companyEmail: string;
        quoteDetails: string;
        quoteDate: string;
        validUntil: string;
        serviceItems: string;
        serviceName: string;
        description: string;
        timeline: string;
        cost: string;
        discount: string;
        discountType: string;
        none: string;
        percentage: string;
        fixed: string;
        discountValue: string;
        addItem: string;
        remove: string;
        total: string;
        serviceType: string;
        custom: string;
        content: string;
        design: string;
        website: string;
        aboutGleads: string;
        termsAndConditions: string;
        serviceNotes: string;
        warrantyPolicy: string;
        paymentTerms: string;
        bankInfo: string;
        pageHeadings: string;
        aboutPageTitle: string;
        quotePageTitle: string;
        termsPageTitle: string;
        paymentPageTitle: string;
        preview: string;
        downloadPDF: string;
        language: string;
    };
}

export const translations: Record<Language, Translations> = {
    vi: {
        coverPage: {
            client: 'QUÝ KHÁCH HÀNG',
            quoteDate: 'NGÀY BÁO GIÁ',
        },
        aboutPage: {
            pageTitle: 'VỀ GLEADS',
            pageNumber: 'Trang',
        },
        quotePage: {
            pageTitle: 'BÁO GIÁ CHI TIẾT',
            customer: 'Khách hàng',
            quoteDate: 'Ngày báo giá',
            validUntil: 'Hiệu lực đến',
            noValue: 'Không có',
            serviceInfo: 'THÔNG TIN DỊCH VỤ',
            timeline: 'THỜI GIAN',
            cost: 'CHI PHÍ (VNĐ)',
            subtotalBeforeDiscount: 'Tổng trước chiết khấu',
            subtotal: 'Subtotal',
            discount: 'Chiết khấu',
            totalEstimatedCost: 'TỔNG CHI PHÍ DỰ KIẾN',
            totalCost: 'Total Estimated Cost',
            vnd: 'VNĐ',
            pageNumber: 'Trang',
        },
        termsPage: {
            pageTitle: 'GHI CHÚ và CHÍNH SÁCH BẢO HÀNH',
            serviceNotes: 'GHI CHÚ VỀ DỊCH VỤ',
            warrantyPolicy: 'CHÍNH SÁCH BẢO HÀNH',
            pageNumber: 'Trang',
        },
        paymentPage: {
            pageTitle: 'THANH TOÁN và XÁC NHẬN',
            paymentMethod: 'PHƯƠNG THỨC THANH TOÁN',
            bankInfo: 'THÔNG TIN TÀI KHOẢN NGÂN HÀNG',
            confirmationAndSigning: 'XÁC NHẬN & KÝ KẾT',
            clientSignature: 'Chữ ký khách hàng',
            clientConfirmation: 'XÁC NHẬN CỦA KHÁCH HÀNG',
            signAndPrint: '(Ký và ghi rõ họ tên)',
            companySignature: 'Chữ ký & đóng dấu',
            companyRepresentative: 'ĐẠI DIỆN CÔNG TY CỔ PHẦN GLEADS',
            signAndStamp: '(Ký và đóng dấu)',
            pageNumber: 'Trang',
        },
        credibilityPage: {
            tagline: 'KHÔNG THEO DÒNG CHẢY THỊ TRƯỜNG – GLEADS TẠO LÀN SÓNG\nTRUYỀN THÔNG ĐỘT PHÁ MANG TÊN BẠN.',
            yearsExperience: 'NĂM KINH NGHIỆM',
            successfulProjects: 'DỰ ÁN THÀNH CÔNG',
            trustedClients: 'KHÁCH HÀNG TIN TƯỞNG',
            industriesServed: 'NGÀNH HÀNG PHỤC VỤ',
            partnersAndClients: 'ĐỐI TÁC & KHÁCH HÀNG TIN TƯỞNG',
            logoPlaceholder: 'Vui lòng thêm logo các brand đã hợp tác vào thư mục assets và cập nhật component',
            trustMessage: 'tự hào là đối tác tin cậy của hơn 200 doanh nghiệp trong và ngoài nước. Chúng tôi cam kết mang đến giải pháp marketing hiệu quả, đo lường được và tăng trưởng bền vững cho mọi thương hiệu.',
            pageNumber: 'Trang',
        },
        contactPage: {
            title: 'THÔNG TIN LIÊN HỆ',
            companyName: 'GLEADS PTE. LTD.',
            singaporeOffice: 'Văn Phòng Singapore',
            vietnamOffice: 'Văn Phòng Việt Nam',
            taxCode: 'Mã Số Thuế',
            contact: 'LIÊN HỆ',
            email: 'Email',
            phone: 'Điện thoại',
            website: 'Website',
            thankYou: 'Cảm ơn bạn đã chọn Gleads làm đối tác phát triển',
        },
        footer: {
            copyright: '© 2025 GLEADS Pte. Ltd. All rights reserved.',
            websiteAndEmail: 'www.gleadsglobal.com',
        },
        form: {
            proposalDetails: 'Chi Tiết Đề Xuất',
            proposalTitle: 'Tiêu đề đề xuất',
            solutionOverview: 'Tổng quan giải pháp',
            clientInfo: 'Thông Tin Khách Hàng',
            clientCompany: 'Tên công ty khách hàng',
            companyInfo: 'Thông Tin Công Ty',
            companyEmail: 'Email công ty',
            quoteDetails: 'Chi Tiết Báo Giá',
            quoteDate: 'Ngày báo giá',
            validUntil: 'Hiệu lực đến',
            serviceItems: 'Các Dịch Vụ',
            serviceName: 'Tên dịch vụ',
            description: 'Mô tả',
            timeline: 'Thời gian',
            cost: 'Chi phí',
            discount: 'Chiết khấu',
            discountType: 'Loại chiết khấu',
            none: 'Không có',
            percentage: 'Phần trăm',
            fixed: 'Cố định',
            discountValue: 'Giá trị chiết khấu',
            addItem: 'Thêm dịch vụ',
            remove: 'Xóa',
            total: 'Tổng cộng',
            serviceType: 'Loại Dịch Vụ',
            custom: 'Tùy chỉnh',
            content: 'Content Marketing',
            design: 'Thiết kế',
            website: 'Website',
            aboutGleads: 'Về GLEADS',
            termsAndConditions: 'Điều Khoản & Chính Sách',
            serviceNotes: 'Ghi chú dịch vụ',
            warrantyPolicy: 'Chính sách bảo hành',
            paymentTerms: 'Điều khoản thanh toán',
            bankInfo: 'Thông tin ngân hàng',
            pageHeadings: 'Tiêu Đề Các Trang',
            aboutPageTitle: 'Tiêu đề trang giới thiệu',
            quotePageTitle: 'Tiêu đề trang báo giá',
            termsPageTitle: 'Tiêu đề trang điều khoản',
            paymentPageTitle: 'Tiêu đề trang thanh toán',
            preview: 'Xem Trước',
            downloadPDF: 'Tải PDF',
            language: 'Ngôn ngữ',
        },
    },
    en: {
        coverPage: {
            client: 'VALUED CLIENT',
            quoteDate: 'QUOTE DATE',
        },
        aboutPage: {
            pageTitle: 'ABOUT GLEADS',
            pageNumber: 'Page',
        },
        quotePage: {
            pageTitle: 'DETAILED QUOTATION',
            customer: 'Customer',
            quoteDate: 'Quote Date',
            validUntil: 'Valid Until',
            noValue: 'N/A',
            serviceInfo: 'SERVICE INFORMATION',
            timeline: 'TIMELINE',
            cost: 'COST (VND)',
            subtotalBeforeDiscount: 'Subtotal Before Discount',
            subtotal: 'Subtotal',
            discount: 'Discount',
            totalEstimatedCost: 'TOTAL ESTIMATED COST',
            totalCost: 'Total Estimated Cost',
            vnd: 'VND',
            pageNumber: 'Page',
        },
        termsPage: {
            pageTitle: 'SERVICE NOTES & WARRANTY POLICY',
            serviceNotes: 'SERVICE NOTES',
            warrantyPolicy: 'WARRANTY POLICY',
            pageNumber: 'Page',
        },
        paymentPage: {
            pageTitle: 'PAYMENT & CONFIRMATION',
            paymentMethod: 'PAYMENT METHOD',
            bankInfo: 'BANK ACCOUNT INFORMATION',
            confirmationAndSigning: 'CONFIRMATION & SIGNING',
            clientSignature: 'Client Signature',
            clientConfirmation: 'CLIENT CONFIRMATION',
            signAndPrint: '(Sign and print name clearly)',
            companySignature: 'Signature & Company Seal',
            companyRepresentative: 'GLEADS COMPANY REPRESENTATIVE',
            signAndStamp: '(Sign and affix company seal)',
            pageNumber: 'Page',
        },
        credibilityPage: {
            tagline: 'NOT FOLLOWING MARKET TRENDS – GLEADS CREATES\nBREAKTHROUGH COMMUNICATION WAVES WITH YOUR BRAND.',
            yearsExperience: 'YEARS OF EXPERIENCE',
            successfulProjects: 'SUCCESSFUL PROJECTS',
            trustedClients: 'TRUSTED CLIENTS',
            industriesServed: 'INDUSTRIES SERVED',
            partnersAndClients: 'TRUSTED PARTNERS & CLIENTS',
            logoPlaceholder: 'Please add partner brand logos to the assets folder and update the component',
            trustMessage: 'is proud to be a trusted partner of over 200 businesses locally and internationally. We are committed to delivering effective, measurable marketing solutions that drive sustainable growth for every brand.',
            pageNumber: 'Page',
        },
        contactPage: {
            title: 'CONTACT INFORMATION',
            companyName: 'GLEADS PTE. LTD.',
            singaporeOffice: 'Singapore Office',
            vietnamOffice: 'Vietnam Office',
            taxCode: 'Tax Code',
            contact: 'CONTACT',
            email: 'Email',
            phone: 'Phone',
            website: 'Website',
            thankYou: 'Thank you for choosing Gleads as your growth partner',
        },
        footer: {
            copyright: '© 2025 GLEADS Pte. Ltd. All rights reserved.',
            websiteAndEmail: 'www.gleadsglobal.com',
        },
        form: {
            proposalDetails: 'Proposal Details',
            proposalTitle: 'Proposal Title',
            solutionOverview: 'Solution Overview',
            clientInfo: 'Client Information',
            clientCompany: 'Client Company Name',
            companyInfo: 'Company Information',
            companyEmail: 'Company Email',
            quoteDetails: 'Quote Details',
            quoteDate: 'Quote Date',
            validUntil: 'Valid Until',
            serviceItems: 'Service Items',
            serviceName: 'Service Name',
            description: 'Description',
            timeline: 'Timeline',
            cost: 'Cost',
            discount: 'Discount',
            discountType: 'Discount Type',
            none: 'None',
            percentage: 'Percentage',
            fixed: 'Fixed',
            discountValue: 'Discount Value',
            addItem: 'Add Service',
            remove: 'Remove',
            total: 'Total',
            serviceType: 'Service Type',
            custom: 'Custom',
            content: 'Content Marketing',
            design: 'Design',
            website: 'Website',
            aboutGleads: 'About GLEADS',
            termsAndConditions: 'Terms & Conditions',
            serviceNotes: 'Service Notes',
            warrantyPolicy: 'Warranty Policy',
            paymentTerms: 'Payment Terms',
            bankInfo: 'Bank Information',
            pageHeadings: 'Page Headings',
            aboutPageTitle: 'About Page Title',
            quotePageTitle: 'Quote Page Title',
            termsPageTitle: 'Terms Page Title',
            paymentPageTitle: 'Payment Page Title',
            preview: 'Preview',
            downloadPDF: 'Download PDF',
            language: 'Language',
        },
    },
};

// Service Templates - English Content
export const serviceTemplatesEN = {
    content: {
        aboutGleads: `GLEADS CONTENT SERVICES.

GLEADS provides comprehensive content services across multiple industries, including SEO writing, social media content, website copy, and video scripts. Our goal is to help businesses build their brand, promote products, and establish stable, scalable communication systems for long-term growth. Our services are ideal for small and medium-sized businesses seeking a dedicated team to support every stage of their development journey.

FLEXIBLE CONTENT SOLUTIONS FOR ALL INDUSTRIES.

• Content Services. GLEADS offers brand promotion writing, product and service descriptions, and content development for websites, social media, and video scripts across various industries.

• SEO and Advertising Solutions. GLEADS develops content aligned with communication campaigns, search advertising, brand positioning, and target audience information consumption habits, optimized for search engines while remaining clear and engaging for readers.

• Sample Articles. Including company introductions, service descriptions, product features, PR articles, social media posts, and short video scripts for advertising purposes.

• Brand Message Integration. Beyond product and service descriptions, GLEADS helps convey brand stories by theme, segment, selling season, and festivals.

MULTI-INDUSTRY SEO ARTICLE SERVICES.

GLEADS has partnered with numerous businesses across different industries, developing content optimized for search engines while ensuring clarity and engagement for readers.

• Search Keyword Optimization. GLEADS builds content based on keyword strategy, ensuring articles appear on search engines when customers search for relevant information.

• Following Customer Search Intent. Our editorial team at GLEADS has deep knowledge of challenging fields such as legal, finance, education, and industrial manufacturing.

• Rapid SEO Implementation Capability. The article system developed by GLEADS is built on search optimization foundations for businesses and brands.

GLEADS provides comprehensive content development solutions for businesses across various industries. We build SEO-optimized article systems, video scripts, social media content, and brand and product introductions that increase customer reach and retention.`,
        serviceNotes: `The above pricing is for reference for articles with standard SEO content, clear structure, suitable for digital communication channels with good search engine reach. GLEADS offers more diverse customization options for specialized content such as industry articles, PR posts, advertising campaign content, sales content, and brand communication. We also implement regular content writing packages, optimizing content for each business development stage and integrating with online marketing platforms. Please contact GLEADS customer service representatives for detailed consultation and prompt support.

1. Website posting fees are not included in the basic package. If customers require article posting, the applicable fee is VND 30,000 per article and only applies when the customer orders the required number of articles. This service does not apply to individual article postings.

2. Regarding image design requirements for articles, if customers need custom-designed images, costs will be quoted separately. Reference pricing is VND 100,000 per image for vector-based designs and VND 80,000 per image for edited real photographs.

3. The number of content revision requests depends on the service package the customer has ordered. Revision requests must not exceed thirty percent of the original article content and are only valid within 14 days from the product delivery date.

5. Certain specialized industries such as legal services, regulations, medicine, biology, aerospace, and mechanics have high professional complexity with intricate terminology systems. Therefore, content development costs in these fields may be adjusted appropriately based on difficulty and in-depth research requirements.`,
        warrantyPolicy: `2. Service Support Policy.
GLEADS applies a service support policy for drafting, developing, and adjusting communication and advertising content according to contract terms signed between both parties, calculated from the date the customer approves the final content. Throughout the warranty period, GLEADS ensures content meets specified requirements and promptly resolves any content errors that arise inconsistent with the delivered content.`
    },
    design: {
        aboutGleads: `GLEADS DESIGN SERVICES.

GLEADS graphic design services are built to serve all types of businesses needing to develop professional online platforms. We design graphics based on actual business needs, helping display information clearly, increase customer trust, optimize sales and communication effectiveness. GLEADS provides modern, user-friendly interface design solutions with full features including business introductions, products and services, news, contact forms, and social media integration, creating a synchronized and easy-to-operate digital ecosystem.

COMPREHENSIVE WEBSITE SOLUTIONS.

• Beautiful and user-friendly website design. GLEADS creates clear, modern interfaces that are easy to navigate on both phones and computers, helping customers easily find information and order online.

• Website setup within 7 days. GLEADS has ready-made interface templates suitable for many industries, helping businesses own a complete website in just one working week.

• Regular website care and updates. Technical team supports posting new content, editing information when needed, and monitoring the system to ensure the website is always secure and operates stably.

• Search engine optimization and promotion support. GLEADS helps websites appear on Google and social networks through SEO-standard structure and user-friendly content.

TEMPLATE INTERFACES AND OUTSTANDING FEATURES.

GLEADS has partnered with many businesses in various industries and sectors, designing many refined, easy-to-view website interfaces that create a good impression from the first visit.

• Clear categories. Websites integrate clear product, service, and project categories that are easy to use, allowing businesses to quickly update products, services, project information, and prices when changes occur.

• Direct ordering. Customers can order directly on the website and receive automatic confirmation, saving time for both businesses and individual customers, as well as business customers.

• Flexible payment. Integrated payment and delivery systems are flexibly configured, helping sales departments easily receive orders and quickly process payments from customers.

GLEADS implements a methodical deployment process ensuring restaurants own high-quality websites in a short time with all necessary features for effective operation.`,
        serviceNotes: `• Scope of edits: Can be changed: colors, fonts, layout. Cannot be changed: lines, logo shapes, or adding additional illustrations.

• If exceeding the limited number of revisions, each subsequent edit will incur an additional 20% service fee.

• Working time: Excludes Saturdays, Sundays, holidays, and response and revision time.

• Design file delivery includes: Original design file (AI/Figma), print file (PDF), static image file (PNG).

• Price does not include 10% VAT.`,
        warrantyPolicy: '- Free design revisions up to 3 times per product\n- Provide complete source files (AI, PSD, PDF)\n- Support resizing and adapting for different platforms\n- Store design files for 24 months'
    },
    website: {
        aboutGleads: `GLEADS WEBSITE SERVICES.

GLEADS website design service is built to serve all types of businesses needing to develop professional online platforms. We design websites based on actual business needs, helping display information clearly, increase customer trust, and optimize sales and communication effectiveness. GLEADS provides modern, user-friendly interface design solutions with full features including business introductions, products and services, news, contact forms, and social media integration, creating a synchronized and easy-to-operate digital ecosystem.

COMPREHENSIVE WEBSITE SOLUTIONS.

• Beautiful and user-friendly website design. GLEADS creates clear, modern interfaces that are easy to navigate on both phones and computers, helping customers easily find information and order online.

• Website setup within 7 days. GLEADS has ready-made interface templates suitable for many industries, helping businesses own a complete website in just one working week.

• Regular website care and updates. Technical team supports posting new content, editing information when needed, and monitoring the system to ensure the website is always secure and operates stably.

• Search engine optimization and promotion support. GLEADS helps websites appear on Google and social networks through SEO-standard structure and user-friendly content.

TEMPLATE INTERFACES AND OUTSTANDING FEATURES.

GLEADS has partnered with many businesses in various industries and sectors, designing many refined, easy-to-view website interfaces that create a good impression from the first visit.

• Clear categories. Websites integrate clear product, service, and project categories that are easy to use, allowing businesses to quickly update products, services, project information, and prices when changes occur.

• Direct ordering. Customers can order directly on the website and receive automatic confirmation, saving time for both businesses and individual customers, as well as business customers.

• Flexible payment. Integrated payment and delivery systems are flexibly configured, helping sales departments easily receive orders and quickly process payments from customers.

GLEADS implements a methodical deployment process ensuring restaurants own high-quality websites in a short time with all necessary features for effective operation.`,
        serviceNotes: `• Website completion time is 7 to 10 days depending on actual conditions and customer response speed during the consultation process.

• Service pricing is calculated in Vietnamese Dong and implementation will be conducted at the location mutually agreed upon by both parties.

• GLEADS warrants the entire website system for 12 months from the date of complete delivery, provided the customer or website administrator makes no changes or modifications to the source code.

• Technical support is provided during business hours from Monday to Friday and commits to resolving issues within 24 working hours.

• The above quote is valid for 30 days from the date sent to the customer.

• Quote does not include costs for writing content for website pages.

• Quote does not include data entry services for articles or product information into the website management system.`,
        warrantyPolicy: `GLEADS applies a website design service warranty policy according to contract terms signed between both parties, calculated from the date the website is officially put into use. Throughout the warranty period, GLEADS ensures stable system operation, promptly resolves technical errors that arise, and supports fixing display or functional errors that are inconsistent with the delivered content.`
    },
    custom: {
        aboutGleads: 'GLEADS is a comprehensive communications and marketing company, providing creative and effective strategic solutions for brands. We bring together a team of experienced experts, always partnering with businesses in building image and enhancing brand awareness.',
        serviceNotes: 'GLEADS is committed to providing professional, transparent, and highly effective services. Our team of experts will accompany your business throughout the entire project implementation process.',
        warrantyPolicy: '• Technical warranty for 12 months\n• Free bug fixes and updates\n• Consultation and usage training'
    }
};

// Default proposal titles in English
export const defaultProposalTitlesEN = {
    content: 'COMPREHENSIVE BRAND COMMUNICATION SOLUTION QUOTATION',
    design: 'PROFESSIONAL DESIGN SERVICES QUOTATION',
    website: 'WEBSITE DEVELOPMENT SOLUTION QUOTATION',
    custom: 'COMPREHENSIVE BRAND COMMUNICATION SOLUTION QUOTATION',
};

// Default solution overviews in English
export const defaultSolutionOverviewsEN = {
    content: 'Comprehensive Digital Marketing solution to elevate brand presence and drive sustainable growth through SEO, Performance Advertising, Content Marketing, and Creative Design.',
    design: 'Professional graphic design services delivering modern, impactful visual solutions that enhance brand identity and customer engagement across all digital platforms.',
    website: 'Complete website development solution with modern design, user-friendly interface, SEO optimization, and integrated features to boost online presence and business growth.',
    custom: 'Comprehensive Digital Marketing solution to elevate brand presence and drive sustainable growth through SEO, Performance Advertising, Content Marketing, and Creative Design.',
};
