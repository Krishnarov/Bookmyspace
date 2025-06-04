import React from "react";
import { BookOpen, Shield, Lock, Mail, Phone, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHead from "../components/HeroHead";

function PrivacyPolicy() {
    const { theme } = useTheme();

    return (
        <>
            <HeroHead text="Privacy Policy"/>
            <div className="min-h-screen dark:bg-gray-900">
                

                {/* Content */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="prose dark:prose-invert prose-lg max-w-none">
                        <div className="mb-12">
                            <p className="text-gray-600 dark:text-gray-300">
                                Welcome to BookMySpace ("we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website bookmyspace.today and use our mobile app BookMySpace.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                By using our services, you agree to the practices described in this policy.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    1. Information We Collect
                                </h2>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                                a. Personal Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                When you register or book a library through our app or website, we may collect:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Mobile number</li>
                                <li>Location (for showing nearby libraries)</li>
                                <li>Booking details</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                                b. Usage Data
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We automatically collect:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                <li>Device type, IP address, browser type</li>
                                <li>Pages visited and time spent</li>
                                <li>App activity logs</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                                c. Optional Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                You may choose to provide additional information for support or feedback.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    2. How We Use Your Information
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We use your information to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Provide, manage, and improve our services</li>
                                <li>Process bookings and payments (if applicable)</li>
                                <li>Send confirmations, updates, and customer support</li>
                                <li>Analyze usage trends to improve the user experience</li>
                                <li>Communicate promotional offers (you can opt out anytime)</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    3. Sharing of Information
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We do not sell or rent your personal information to any third parties.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We may share data with:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Library partners (only booking-related info)</li>
                                <li>Service providers (like hosting or analytics)</li>
                                <li>Law enforcement if required by law</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    4. Data Security
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                We use industry-standard encryption, secure servers, and access control to protect your data. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    5. Your Rights
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                You can:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                <li>Access or update your profile</li>
                                <li>Request deletion of your data</li>
                                <li>Opt out of promotional communications</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300">
                                To make a request, email us at bookmyspace.today@gmail.com.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    6. Children's Privacy
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                BookMySpace is intended for users aged 13 and above. We do not knowingly collect data from children under 13.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    7. Third-Party Links
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our app or site may contain links to third-party websites. We are not responsible for their privacy practices.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    8. Changes to This Policy
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                We may update this Privacy Policy periodically. Any changes will be posted here with the updated date.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    9. Contact Us
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                For questions or concerns about this Privacy Policy, contact us at:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Email: bookmyspace.today@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Phone: 7800080503</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">Website: bookmyspace.today</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Last Updated Date: June 4, 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PrivacyPolicy;