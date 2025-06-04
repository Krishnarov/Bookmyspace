import React from "react";
import { ClipboardCheck, Shield, BookOpen, AlertCircle, CreditCard, UserCheck, Lock, Mail, Phone, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHead from "../components/HeroHead";

function TermsAndConditions() {
    const { theme } = useTheme();

    return (
        <>
            <HeroHead text="Terms & Conditions"/>
            <div className="min-h-screen dark:bg-gray-900">

                {/* Content */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="prose dark:prose-invert prose-lg max-w-none text-left">
                        <div className="mb-12">
                            <p className="text-gray-600 dark:text-gray-300">
                                Welcome to BookMySpace ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our mobile application and website bookmyspace.today (collectively, the "Platform"). By accessing or using BookMySpace, you agree to be bound by these Terms.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <UserCheck className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    1. Eligibility
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                To use BookMySpace, you must be at least 18 years of age or have the consent of a parent or guardian. By using the app, you confirm that you meet these requirements.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    2. Services Offered
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                BookMySpace connects students with private self-study libraries for short or long-term bookings. We:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>List verified libraries available in your location</li>
                                <li>Allow online slot booking and payments</li>
                                <li>Do not charge commission from library owners</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    3. User Responsibilities
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                By using our platform, you agree to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Provide accurate and complete information during registration</li>
                                <li>Use the app only for lawful purposes</li>
                                <li>Not disrupt or interfere with the security or functionality of the app</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    4. Bookings and Payments
                                </h2>
                            </div>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>All bookings are prepaid unless otherwise stated</li>
                                <li>Once booked, a slot cannot be transferred or resold</li>
                                <li>BookMySpace reserves the right to cancel any booking at its discretion (refunds may apply in such cases)</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    5. Cancellation & Refund Policy
                                </h2>
                            </div>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Users may cancel bookings based on the cancellation policy stated at the time of booking</li>
                                <li>Refunds (if applicable) will be processed within 7–10 business days to the original payment method</li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    6. Library Owner Agreement
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Library owners listing on the platform agree to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Allow bookings made via BookMySpace</li>
                                <li>Honor student bookings without discrimination</li>
                                <li>Not charge students extra or negotiate prices outside the platform</li>
                            </ul>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    7. Pricing Policy
                                </h2>
                            </div>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Prices for each library are set by BookMySpace based on factors such as location, demand, and amenities</li>
                                <li>Library owners cannot set or alter the prices for their listings</li>
                            </ul>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    8. Prohibited Activities
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Users must not:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Use bots, crawlers, or automated scripts</li>
                                <li>Engage in abusive, threatening, or harassing behavior toward other users or library owners</li>
                                <li>Attempt to circumvent or manipulate the platform's functionality</li>
                            </ul>
                        </div>

                        {/* Section 9 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    9. Intellectual Property
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                All content on BookMySpace (text, logos, graphics, etc.) is owned by BookMySpace and protected by applicable laws. You may not copy, reproduce, or distribute any content without permission.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    10. Limitation of Liability
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We are not responsible for:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Personal belongings lost or damaged in libraries</li>
                                <li>Any misconduct or negligence by library staff</li>
                                <li>Service interruptions due to technical issues or force majeure</li>
                            </ul>
                        </div>

                        {/* Section 11 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <UserCheck className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    11. Account Termination
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                We may suspend or terminate your account without prior notice if you violate these Terms.
                            </p>
                        </div>

                        {/* Section 12 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    12. Privacy
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Your use of the Platform is also governed by our Privacy Policy. Please review it to understand how we collect and use your personal information.
                            </p>
                        </div>

                        {/* Section 13 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 dark:text-cyan-300">
                                    <ClipboardCheck className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    13. Changes to Terms
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                We reserve the right to update or modify these Terms at any time. Continued use of the platform following changes means you accept the new Terms.
                            </p>
                        </div>

                        {/* Section 14 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    14. Contact Us
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                If you have any questions or concerns about these Terms, please contact us at:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">7800080503</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">bookmyspace.today</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">bookmyspace.today@gmail.com</span>
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

export default TermsAndConditions;