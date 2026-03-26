import React from 'react';

const Blog = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4">
            <h1 className="text-4xl font-bold text-safety-accent mb-8 uppercase">Blog Industrial</h1>
            <div className="bg-industrial-card p-8 rounded-lg text-center border border-slate-700">
                <h2 className="text-2xl font-bold mb-4">Próximamente</h2>
                <p className="text-metal-silver">
                    Estamos preparando artículos interesantes sobre la industria del acero inoxidable, tendencias y consejos útiles.
                </p>
            </div>
        </div>
    );
};

export default Blog;
