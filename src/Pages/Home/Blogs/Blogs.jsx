import React from 'react';

const blogPostsData = [
    {
        title: 'Understanding React Hooks',
        excerpt: 'In this post, we will explore the basics of React Hooks, including useState and useEffect, and how they can help simplify your component logic.',
        date: 'September 20, 2024',
        link: '/blogs/understanding-react-hooks',
    },
    {
        title: 'A Guide to Node.js and Express',
        excerpt: 'This guide covers the fundamentals of building a web application with Node.js and Express, including setting up a server and handling routes.',
        date: 'September 15, 2024',
        link: '/blogs/guide-to-node-express',
    },
    {
        title: 'CSS Grid vs. Flexbox: Which One to Use?',
        excerpt: 'In this article, we will compare CSS Grid and Flexbox to help you decide which layout method is best for your next project.',
        date: 'September 10, 2024',
        link: '/blogs/css-grid-vs-flexbox',
    },
    {
        title: 'Getting Started with MongoDB',
        excerpt: 'Learn how to get started with MongoDB, a popular NoSQL database, including installation, setup, and basic CRUD operations.',
        date: 'September 5, 2024',
        link: '/blogs/getting-started-with-mongodb',
    },
];

const Blogs = () => {
    return (
        <div className="blogs-section max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-montserrat font-bold mb-6">My Blog</h2>
            <div className="space-y-6">
                {blogPostsData.map((post, index) => (
                    <div key={index} className="blog-card border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <h3 className="text-2xl font-poppins font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-1">{post.date}</p>
                        <p className="text-lg font-open-sans mb-4">{post.excerpt}</p>
                        <a 
                            href={post.link} 
                            className="btn font-poppins font-semibold bg-[#008C45] text-white py-2 px-4 rounded hover:bg-[#007A3E] transition"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
