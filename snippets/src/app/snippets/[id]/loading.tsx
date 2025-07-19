// app/snippets/[id]/loading.tsx
import React from 'react';

export default function LoadingSnippetPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-300 rounded w-1/2" />
        <div className="h-6 bg-gray-200 rounded w-1/3" />
        <div className="h-64 bg-gray-100 rounded" />
      </div>
    </div>
  );
}
