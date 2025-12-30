import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const socialLinks = [
        { icon: <FaTwitter />, href: 'https://x.com/DarylFav3802', label: 'Twitter', color: '#1DA1F2' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/daryle-favour-m-i-3b3b37290', label: 'LinkedIn', color: '#0077B5' },
        { icon: <FaGithub />, href: 'https://github.com/daryl17fav', label: 'GitHub', color: '#333' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/22944440251', label: 'WhatsApp', color: '#25D366' },
    ];

    const contactInfo = [
        { icon: <HiMail />, label: 'Email', value: 'muaikeidarylfav@gmail.com' },
        { icon: <HiPhone />, label: 'Phone', value: '+229 44 44 02 51 / +229 69 01 20 12' },
        { icon: <HiLocationMarker />, label: 'Location', value: 'Cotonou, Benin' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            // Form is valid, submit it
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Let's work together">
                    Get In Touch
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={staggerItem}>
                            <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-text-primary-dark">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        className="flex items-center gap-4"
                                        variants={staggerItem}
                                    >
                                        <div className="bg-primary/20 p-3 rounded-lg">
                                            <div className="text-2xl text-primary">{info.icon}</div>
                                        </div>
                                        <div>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">{info.label}</p>
                                            <p className="text-text-primary dark:text-text-primary-dark font-semibold">{info.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={staggerItem}>
                            <h3 className="text-xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-bg-paper dark:bg-bg-paper-dark border border-gray-200 dark:border-gray-700 p-4 rounded-lg text-3xl text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: '0 0 20px rgba(31, 119, 255, 0.3)',
                                        }}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-bg-paper dark:bg-bg-paper-dark border-2 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary-dark transition-colors duration-300 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark`}
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-bg-paper dark:bg-bg-paper-dark border-2 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary-dark transition-colors duration-300 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 bg-bg-paper dark:bg-bg-paper-dark border-2 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary-dark transition-colors duration-300 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark resize-none`}
                                    placeholder="Your message..."
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" variant="primary" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
