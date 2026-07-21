import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { slideUpStagger, staggerItem, slideInLeft, slideInRight } from '../../utils/animations';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors,   setErrors]   = useState({});
    const [sent,     setSent]     = useState(false);

    const socialLinks = [
        { icon: <FaTwitter />,  href: 'https://x.com/DarylFav3802',                            label: 'Twitter'   },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/daryle-favour-m-i-3b3b37290',    label: 'LinkedIn'  },
        { icon: <FaGithub />,   href: 'https://github.com/daryl17fav',                          label: 'GitHub'    },
        { icon: <FaWhatsapp />, href: 'https://wa.me/2290163035022',                            label: 'WhatsApp'  },
    ];

    const contactInfo = [
        { icon: <Mail size={16} />,     label: 'Email',    value: 'muaikeidarylfav@gmail.com'          },
        { icon: <Phone size={16} />,    label: 'Phone',    value: '+229 01 97 05 34 30'                 },
        { icon: <MapPin size={16} />,   label: 'Location', value: 'Cotonou, Benin'                     },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(p => ({ ...p, [name]: value }));
        if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
    };

    const validate = () => {
        const e = {};
        if (!formData.name.trim())    e.name    = 'Name is required';
        if (!formData.email.trim())   e.email   = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
        if (!formData.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length === 0) {
            setSent(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSent(false), 4000);
        } else {
            setErrors(errs);
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle eyebrow="// Establish_Connection">
                    Get In Touch
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-16">

                    {/* ── LEFT: Info ── */}
                    <motion.div
                        className="space-y-10"
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {/* Contact rows */}
                        <div className="space-y-5">
                            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#00E5FF]/40 mb-5">
                                {'// Contact_Info'}
                            </p>
                            {contactInfo.map(info => (
                                <div key={info.label} className="flex items-center gap-4 group">
                                    <div className="p-2.5 border border-[#00E5FF]/15 group-hover:border-[#00E5FF]/50 transition-colors duration-300 text-[#00E5FF]/50 group-hover:text-[#00E5FF]">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] text-[#6B7280] tracking-widest uppercase">
                                            {info.label}
                                        </p>
                                        <p className="text-[#F0F0F0] text-sm font-medium">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#00E5FF]/40 mb-5">
                                {'// Connect'}
                            </p>
                            <motion.div
                                className="flex gap-3"
                                variants={slideUpStagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {socialLinks.map(s => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        variants={staggerItem}
                                        className="p-3.5 border border-white/[0.08] text-[#6B7280] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all duration-300 text-xl"
                                        style={{ background: 'rgba(255,255,255,0.02)' }}
                                        whileHover={{ y: -3, boxShadow: '0 0 20px rgba(0,229,255,0.15)' }}
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Form ── */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name */}
                            <div>
                                <label className="block font-mono text-[10px] tracking-[0.35em] text-[#00E5FF]/50 uppercase mb-3">
                                    {'// Name'}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="input-terminal"
                                    style={errors.name ? { borderBottomColor: 'rgba(239,68,68,0.6)' } : {}}
                                />
                                {errors.name && (
                                    <p className="font-mono text-[10px] text-red-400/80 mt-2">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-mono text-[10px] tracking-[0.35em] text-[#00E5FF]/50 uppercase mb-3">
                                    {'// Email'}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="input-terminal"
                                    style={errors.email ? { borderBottomColor: 'rgba(239,68,68,0.6)' } : {}}
                                />
                                {errors.email && (
                                    <p className="font-mono text-[10px] text-red-400/80 mt-2">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-mono text-[10px] tracking-[0.35em] text-[#00E5FF]/50 uppercase mb-3">
                                    {'// Message'}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Your message..."
                                    className="input-terminal resize-none"
                                    style={errors.message ? { borderBottomColor: 'rgba(239,68,68,0.6)' } : {}}
                                />
                                {errors.message && (
                                    <p className="font-mono text-[10px] text-red-400/80 mt-2">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                className="group relative w-full py-4 font-mono text-sm tracking-widest uppercase overflow-hidden bg-[#00E5FF] text-[#050505] font-bold hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-shadow duration-300"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10">
                                    {sent ? '// Message Sent ✓' : '// Send Message'}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
