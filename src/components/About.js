import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main style={{ width: '100%', height: '100vh' }}>
     <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.32/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/hhUiJ1MndKyBZ9kW/scene.splinecode"></spline-viewer>
    </main>
  );
}
