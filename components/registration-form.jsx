'use client';

import { useState } from 'react';

export function RegistrationForm() {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="rounded-lg bg-white/60 p-8 border border-[#28371c]/10 text-center">
                <h3 className="text-xl font-bold mb-2 text-[#28371c]">Thank you for your interest</h3>
                <p className="text-[#4a5a3c]">
                    We have received your registration. You will receive further details as they become available.
                </p>
            </div>
        );
    }

    return (
        <form
            name="registration"
            method="POST"
            data-netlify="true"
            onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(new FormData(form)).toString(),
                })
                    .then(() => setSubmitted(true))
                    .catch(() => alert('Something went wrong. Please try again.'));
            }}
            className="rounded-lg bg-white/60 p-8 border border-[#28371c]/10 space-y-6"
        >
            <input type="hidden" name="form-name" value="registration" />
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#28371c] mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full rounded-md border border-[#28371c]/20 bg-white px-3 py-2 text-sm text-[#28371c] focus:outline-none focus:ring-2 focus:ring-[#fa4f28]/40" />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#28371c] mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full rounded-md border border-[#28371c]/20 bg-white px-3 py-2 text-sm text-[#28371c] focus:outline-none focus:ring-2 focus:ring-[#fa4f28]/40" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#28371c] mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full rounded-md border border-[#28371c]/20 bg-white px-3 py-2 text-sm text-[#28371c] focus:outline-none focus:ring-2 focus:ring-[#fa4f28]/40" />
            </div>
            <div>
                <label htmlFor="organisation" className="block text-sm font-medium text-[#28371c] mb-1">Organisation</label>
                <input type="text" id="organisation" name="organisation" className="w-full rounded-md border border-[#28371c]/20 bg-white px-3 py-2 text-sm text-[#28371c] focus:outline-none focus:ring-2 focus:ring-[#fa4f28]/40" />
            </div>
            <div>
                <label htmlFor="attendance" className="block text-sm font-medium text-[#28371c] mb-1">Preferred Attendance</label>
                <select id="attendance" name="attendance" className="w-full rounded-md border border-[#28371c]/20 bg-white px-3 py-2 text-sm text-[#28371c] focus:outline-none focus:ring-2 focus:ring-[#fa4f28]/40">
                    <option value="in-person">In-Person (Spain)</option>
                    <option value="online">Online</option>
                </select>
            </div>
            <button type="submit" className="btn btn-lg w-full">Submit Registration</button>
        </form>
    );
}
