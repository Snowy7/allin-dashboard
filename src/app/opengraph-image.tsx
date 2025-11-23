import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Happy Sweet Cake - Premium Sweets & Events'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #FF6B35, #F7B801)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
           {/* Simple Cake/Gift Icon shape using pure CSS/SVG would be complex here without importing assets, 
               so we'll stick to text/shapes */}
           <div style={{ fontSize: 80, fontWeight: 'bold' }}>🍰</div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Happy Sweet Cake
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            opacity: 0.9,
          }}
        >
          Curated sweets, fine florals & bespoke events
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}

