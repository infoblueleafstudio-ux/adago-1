'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main style={{ textAlign: 'center', padding: '80px' }}>
      <h1>エラーが発生しました</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{ marginTop: '20px', padding: '8px 20px', border: '1px solid #aaa' }}
      >
        再試行
      </button>
    </main>
  )
}


