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
  // ...existing projects
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Mock data - replace with your actual data fetching logic
  const project = {
    id: params.id,
    title: 'Chung tay cứu lấy đôi mắt bé Lê Huỳnh Gia Khánh',
    description: 'Bé Lê Huỳnh Gia Khánh sinh non vào tuần thứ 31 của thai kỳ...',
    image:'/projects/project1.jpg',
    currentAmount: 15000000,
    targetAmount: 50000000,
    donorsCount: 255,
    status: 'ongoing' as const
  };

  if (!project) {
    return NextResponse.json(
      { error: 'Project not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}