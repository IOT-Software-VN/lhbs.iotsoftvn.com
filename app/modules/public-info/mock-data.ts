export interface AnnualReport {
  id: string
  title: string
  year: string
  description: string
  pdfUrl: string
  publishDate: string
  fileSize: string
  featured?: boolean
}

export interface FormDocument {
  id: string
  name: string
  category: 'admission' | 'leave' | 'health' | 'complaint' | 'other'
  description: string
  pdfUrl: string
  fileSize: string
  lastUpdate: string
}

export const annualReports: AnnualReport[] = [
  {
    id: 'report-2024-2025',
    title: 'Báo cáo thường niên năm học 2024 - 2025',
    year: '2024-2025',
    description: 'Báo cáo toàn diện về hoạt động giáo dục, chất lượng đào tạo và các thành tích nổi bật của hệ thống trường Song ngữ Lạc Hồng trong năm học 2024-2025',
    pdfUrl: '/documents/Anual-Report-LHBS.pdf',
    publishDate: '01/02/2025',
    fileSize: '15.2 MB',
    featured: true
  },
  {
    id: 'report-2023-2024',
    title: 'Báo cáo thường niên năm học 2023 - 2024',
    year: '2023-2024',
    description: 'Báo cáo tổng kết hoạt động giáo dục năm học 2023-2024',
    pdfUrl: 'https://lhbs.edu.vn/wp-content/uploads/2024/02/BAO-CAO-THUONG-NIEN-2023-2024.pdf',
    publishDate: '15/02/2024',
    fileSize: '14.8 MB'
  },
  {
    id: 'report-2022-2023',
    title: 'Báo cáo thường niên năm học 2022 - 2023',
    year: '2022-2023',
    description: 'Báo cáo tổng kết hoạt động giáo dục năm học 2022-2023',
    pdfUrl: 'https://lhbs.edu.vn/wp-content/uploads/2023/02/BAO-CAO-THUONG-NIEN-2022-2023.pdf',
    publishDate: '20/02/2023',
    fileSize: '13.5 MB'
  },
  {
    id: 'report-2021-2022',
    title: 'Báo cáo thường niên năm học 2021 - 2022',
    year: '2021-2022',
    description: 'Báo cáo tổng kết hoạt động giáo dục năm học 2021-2022',
    pdfUrl: 'https://lhbs.edu.vn/wp-content/uploads/2022/02/BAO-CAO-THUONG-NIEN-2021-2022.pdf',
    publishDate: '25/02/2022',
    fileSize: '12.9 MB'
  }
]

export const formDocuments: FormDocument[] = [
  // Admission forms
  {
    id: 'form-admission-01',
    name: 'Đơn đăng ký nhập học mới',
    category: 'admission',
    description: 'Mẫu đơn dành cho phụ huynh đăng ký nhập học cho học sinh mới',
    pdfUrl: '',
    fileSize: '250 KB',
    lastUpdate: '15/01/2025'
  },
  {
    id: 'form-admission-02',
    name: 'Hồ sơ nhập học',
    category: 'admission',
    description: 'Danh sách hồ sơ cần nộp khi nhập học',
    pdfUrl: '',
    fileSize: '180 KB',
    lastUpdate: '15/01/2025'
  },
  
  // Leave forms
  {
    id: 'form-leave-01',
    name: 'Đơn xin nghỉ học có lý do',
    category: 'leave',
    description: 'Mẫu đơn xin phép nghỉ học cho học sinh',
    pdfUrl: '',
    fileSize: '120 KB',
    lastUpdate: '10/01/2025'
  },
  {
    id: 'form-leave-02',
    name: 'Đơn rút hồ sơ',
    category: 'leave',
    description: 'Mẫu đơn rút hồ sơ học sinh',
    pdfUrl: 'https://drive.google.com/file/d/1I1QBFJaFAYp1g8CYWYJojzIRsj-g5bTg/preview',
    fileSize: '200 KB',
    lastUpdate: '30/12/2024'
  },
  
  // Health forms
  {
    id: 'form-health-01',
    name: 'Phiếu khám sức khỏe định kỳ',
    category: 'health',
    description: 'Mẫu phiếu khám sức khỏe cho học sinh',
    pdfUrl: '',
    fileSize: '200 KB',
    lastUpdate: '05/01/2025'
  },
  {
    id: 'form-health-02',
    name: 'Đơn xin miễn giảm hoạt động thể chất',
    category: 'health',
    description: 'Mẫu đơn xin miễn giảm hoạt động thể dục thể thao',
    pdfUrl: '',
    fileSize: '130 KB',
    lastUpdate: '05/01/2025'
  },
  
  // Complaint forms
  {
    id: 'form-complaint-01',
    name: 'Đơn góp ý/khiếu nại',
    category: 'complaint',
    description: 'Mẫu đơn gửi góp ý hoặc khiếu nại tới nhà trường',
    pdfUrl: '',
    fileSize: '150 KB',
    lastUpdate: '20/12/2024'
  },
  
  // Other forms
  {
    id: 'form-other-01',
    name: 'Đơn đề nghị cấp giấy xác nhận học sinh',
    category: 'other',
    description: 'Mẫu đơn đề nghị cấp giấy xác nhận học sinh',
    pdfUrl: 'https://drive.google.com/file/d/1knZSDJ5fnT0rIbBEUPecPte0tVX2Fq8I/preview',
    fileSize: '250 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-02',
    name: 'Đơn xin photo hồ sơ',
    category: 'other',
    description: 'Mẫu đơn xin photo hồ sơ học sinh',
    pdfUrl: 'https://drive.google.com/file/d/197qKBa2x7OYLtI-FJXnQ9ojwzr6lOxp8/preview',
    fileSize: '180 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-03',
    name: 'Đơn thay đổi SĐT',
    category: 'other',
    description: 'Mẫu đơn đề nghị thay đổi số điện thoại liên hệ',
    pdfUrl: 'https://drive.google.com/file/d/1QglJuLUtdhk53ZqwbWU8wmDUbz7jCnFq/preview',
    fileSize: '200 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-04',
    name: 'Đơn đăng ký/ Hủy đăng ký dịch vụ',
    category: 'other',
    description: 'Mẫu đơn đăng ký hoặc hủy đăng ký các dịch vụ của nhà trường',
    pdfUrl: 'https://drive.google.com/file/d/1QdkVPTZtNIFjcLJRdL7srYDP52QZDgKI/preview',
    fileSize: '220 KB',
    lastUpdate: '30/12/2024'
  }
]

export const formCategories = [
  { id: 'admission', label: 'Tuyển sinh' },
  { id: 'leave', label: 'Nghỉ học' },
  { id: 'health', label: 'Sức khỏe' },
  { id: 'complaint', label: 'Góp ý' },
  { id: 'other', label: 'Khác' }
] as const
