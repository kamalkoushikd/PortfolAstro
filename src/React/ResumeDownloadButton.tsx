// src/components/ResumeDownloadButton.jsx
// NB: This is still less ideal than a plain Astro component with an <a> tag if DRM is an issue.
import { useState } from 'react';
import { Download } from 'lucide-react';

export default function ResumeDownloadButton({ resumeUrl = '/resume.pdf', fileName = 'resume.pdf' }) {
    // The isDownloading state with a direct <a> tag is tricky because
    // you don't get easy success/failure callbacks.
    // For a simple download link, this state is often omitted.
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        // We can't reliably know when the download starts or finishes with a simple <a> tag.
        // So, we just set a flag and maybe reset it after a timeout if needed.
        // Or, more simply, don't disable the button, as the browser handles multiple clicks fine.
        // For this example, let's just acknowledge the click.
        setTimeout(() => setIsClicked(false), 2000); // Reset after 2s, purely cosmetic
    };

    return (
        <a
            href={resumeUrl}
            download={fileName}
            onClick={handleClick} // You can still have an onClick
            style={{
                backgroundColor: isClicked ? '#5797ff' : '#2563eb', // Slightly darker when "active"
                color: 'white',
                width: 'fit-content',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none',
                opacity: isClicked ? 0.7 : 1, // Visual feedback
            }}
        >
            {isClicked ? 'Starting...' : <><Download size={20} /> Download Resume</>}
        </a>
    );
}