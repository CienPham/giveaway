import { NextResponse } from 'next/server';

const projects = [
  {
    id: '1',
    title: 'Hỗ trợ trẻ em vùng cao',
    description: 'Chương trình hỗ trợ xây dựng trường học cho trẻ em vùng cao Sapa...',
    currentAmount: 50000000,
    targetAmount: 100000000,
    image: '/projects/project1.jpg',
    category: 'education',
    endDate: '2024-12-31'
  },
  {
    id: '2',
    title: 'Xây dựng thư viện cho trẻ em',
    description: 'Dự án xây dựng thư viện và phát triển văn hóa đọc...',
    currentAmount: 30000000,
    targetAmount: 80000000,
    image: '/projects/project2.jpg',
    category: 'education',
    endDate: '2024-11-30'
  },
  {
    id: '3',
    title: 'Hỗ trợ y tế vùng xa',
    description: 'Chương trình khám chữa bệnh miễn phí cho người dân...',
    currentAmount: 70000000,
    targetAmount: 150000000,
    image: '/projects/project3.jpg',
    category: 'healthcare',
    endDate: '2024-10-31'
  }
];

export async function GET() {
  return NextResponse.json(
    projects,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}