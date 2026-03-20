'use client';

import { useState } from 'react';
import { Alert } from './alert';

export function RegistrationForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
                myForm.reset();
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <form name="registration" onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left">
            <input type="hidden" name="form-name" value="registration" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="reg-name" className="block text-sm font-medium text-blue-200 mb-1">Full Name *</label>
                    <input id="reg-name" name="name" type="text" placeholder="Dr. Jane Smith" required className="input w-full" />
                </div>
                <div>
                    <label htmlFor="reg-email" className="block text-sm font-medium text-blue-200 mb-1">Email Address *</label>
                    <input id="reg-email" name="email" type="email" placeholder="jane.smith@example.com" required className="input w-full" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="reg-organisation" className="block text-sm font-medium text-blue-200 mb-1">Organisation / Affiliation *</label>
                    <input id="reg-organisation" name="organisation" type="text" placeholder="University of..." required className="input w-full" />
                </div>
                <div>
                    <label htmlFor="reg-role" className="block text-sm font-medium text-blue-200 mb-1">Role / Position</label>
                    <input id="reg-role" name="role" type="text" placeholder="e.g. Professor, Researcher" className="input w-full" />
                </div>
            </div>
            <div>
                <label htmlFor="reg-attendance" className="block text-sm font-medium text-blue-200 mb-1">Preferred Attendance *</label>
                <select id="reg-attendance" name="attendance" required className="input w-full">
                    <option value="">Select an option</option>
                    <option value="in-person">In-Person (Girona, Spain)</option>
                    <option value="online">Online</option>
                    <option value="undecided">Undecided</option>
                </select>
            </div>
            <div>
                <label htmlFor="reg-message" className="block text-sm font-medium text-blue-200 mb-1">Additional Comments</label>
                <textarea id="reg-message" name="message" rows={3} placeholder="Any questions or additional information..." className="input w-full resize-y" />
            </div>
            <button className="btn btn-lg w-full sm:w-auto sm:self-center mt-2" type="submit" disabled={status === 'pending'}>
                {status === 'pending' ? 'Submitting...' : 'Register Interest'}
            </button>
            {status === 'ok' && (
                <Alert type="success">
                    Thank you for registering your interest! We will be in touch with further details.
                </Alert>
            )}
            {status === 'error' && (
                <Alert type="error">
                    Something went wrong. Please try again or contact us at info@sian-nutrition.org. {error}
                </Alert>
            )}
        </form>
    );
}
