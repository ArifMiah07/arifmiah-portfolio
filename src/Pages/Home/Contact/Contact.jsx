import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., sending data to an API
        console.log('Form submitted:', formData);
        // Clear the form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-section max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Contact Me</h2>
            <p className="text-lg font-open-sans mb-6">
                If you have any questions or would like to get in touch, feel free to reach out using the form below!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-lg font-open-sans mb-1">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#008C45]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-open-sans mb-1">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#008C45]"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg font-open-sans mb-1">Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows="5" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#008C45]"
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn font-poppins font-semibold bg-[#008C45] text-white py-2 px-4 rounded hover:bg-[#007A3E] transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
