'use client';

import { useState } from 'react';
import { projectService } from '@/services/api';

export default function DonationForm({ projectId }: { projectId: string }) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await projectService.donate(projectId, {
        amount: parseInt(amount),
      });
      alert('Cảm ơn bạn đã ủng hộ!');
      setAmount('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Số tiền ủng hộ
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        {loading ? 'Đang xử lý...' : 'Ủng hộ ngay'}
      </button>
    </form>
  );
}