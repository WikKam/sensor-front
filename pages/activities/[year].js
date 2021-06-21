import React from 'react';

export default function Activities({ year }) {
    return <p>Strona w budowie...</p>
}

export function getStaticPaths() {
    return {
        paths: ['2014','2015', '2016'].map(year => ({params: {year: year} })),
        fallback: true,
    }
}

export function getStaticProps ({ params }) {
    const { year } = params;
    return {
        props: {
            year,
        }
    }
}

