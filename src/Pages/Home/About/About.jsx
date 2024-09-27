import React from 'react';

const About = () => {
    return (
        <div className="text-center about-section max-w-4xl mx-auto p-8">
            <h2 className="text-center text-3xl font-montserrat font-bold mb-4">About Me</h2>
            <p className="text-lg font-open-sans mb-6">
                Hello! I’m Arif Miah, a passionate MERN stack developer with a focus on creating 
                dynamic and responsive web applications. I have experience working with technologies 
                such as React, Node.js, Express.js, and MongoDB, and I'm always eager to learn more and improve my skills.
            </p>
            <h3 className="text-center text-2xl font-montserrat font-semibold mb-2">Resume</h3>
            <div className='w-full flex flex-col items-center'>
                <ul className="list-disc pl-6 mb-6 flex flex-col justify-start items-start">
                    <li>✅ 3+ years of experience in web development.</li>
                    <li>✅ Proficient in MERN stack technologies.</li>
                    <li>✅ Experience in collaborating with cross-functional teams.</li>
                    <li>✅ Strong problem-solving skills and a detail-oriented mindset.</li>
                </ul>
            </div>
            <p className="text-lg font-open-sans mb-6">
                I enjoy collaborating with designers and other developers to build solutions that not only meet 
                client needs but also enhance the user experience. In my free time, I work on personal projects, 
                explore AI art, and contribute to open-source initiatives.
            </p>
            <a 
                className="text-center btn font-poppins font-semibold bg-[#008C45] text-white py-2 px-4 rounded hover:bg-[#007A3E] transition" 
                href="/path/to/your-cv.pdf" 
                download
            >
                Download My CV
            </a>
        </div>
    );
};

export default About;
