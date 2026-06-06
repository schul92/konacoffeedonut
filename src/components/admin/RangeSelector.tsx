'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const PRESETS = [
  { key: 'today', label: 'Today' },
  { key: '7d', label: '7 Days' },
  { key: '28d', label: '28 Days' },
  { key: '90d', label: '90 Days' },
];

export default function RangeSelector({ active }: { active: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [start, setStart] = useState(params.get('start') ?? '');
  const [end, setEnd] = useState(params.get('end') ?? '');
  const isCustom = active === 'custom';

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
        {PRESETS.map((p) => {
          const on = active === p.key;
          return (
            <button
              key={p.key}
              onClick={() => router.push(`/admin?range=${p.key}`)}
              className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                on ? 'bg-orange-500 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (start && end) router.push(`/admin?start=${start}&end=${end}`);
        }}
        className="flex items-center gap-1.5"
      >
        <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="rounded-lg border border-slate-200 px-2 py-1.5 text-sm text-slate-700" />
        <span className="text-slate-400 text-sm">→</span>
        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="rounded-lg border border-slate-200 px-2 py-1.5 text-sm text-slate-700" />
        <button
          type="submit"
          className={`px-3 py-1.5 text-sm font-semibold rounded-lg border transition-colors ${
            isCustom ? 'bg-orange-500 text-white border-orange-500' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          Apply
        </button>
      </form>
    </div>
  );
}
