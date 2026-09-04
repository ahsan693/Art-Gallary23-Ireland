const svgDataUri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

export const checkoutIcons = {
    back: svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 14L6 9L11 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
    bag: svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.5 7.5H15.5L14.75 17H5.25L4.5 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.5 8V6.25C7.5 4.73 8.62 3.5 10 3.5C11.38 3.5 12.5 4.73 12.5 6.25V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'),
    arrow: svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
    check: svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9.9996 3L4.50015 8.4996L2.0004 5.99978" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
    stripe: svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="117.5" height="48.7744" viewBox="0 0 117.5 48.7744"><text x="4" y="35" fill="white" font-family="Arial, sans-serif" font-size="32" font-weight="700" letter-spacing="-1.5">stripe</text></svg>'),
};
