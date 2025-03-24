import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // This is a mock authentication
    // In a real app, you would validate against a database
    if (email === 'test@example.com' && password === 'password') {
      return NextResponse.json({
        id: '1',
        email: email,
        name: 'Test User'
      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}