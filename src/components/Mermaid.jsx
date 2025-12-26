import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'Inter, sans-serif',
    themeVariables: {
        primaryColor: '#06b6d4',
        primaryTextColor: '#fff',
        primaryBorderColor: '#06b6d4',
        lineColor: '#06b6d4',
        secondaryColor: '#a855f7',
        tertiaryColor: '#22c55e',
    }
});

export default function Mermaid({ chart }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && chart) {
            ref.current.removeAttribute('data-processed');
            mermaid.contentLoaded();
        }
    }, [chart]);

    return (
        <div
            className="mermaid"
            ref={ref}
            style={{
                background: 'rgba(0,0,0,0.2)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                margin: '2rem 0',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {chart}
        </div>
    );
}
