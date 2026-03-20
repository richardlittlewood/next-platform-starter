import { FeedbackForm } from 'components/feedback-form';

export const metadata = {
    title: 'Contact'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-6">Contact Us</h1>
                <p className="text-lg text-[#4a5a3c]">
                    Whether you have a question about our programmes, research collaborations, or general enquiries,
                    we would love to hear from you.
                </p>
            </section>

            <section className="grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-accent mb-2">Address</h3>
                            <p className="text-[#4a5a3c]">
                                Scientific Institute of Advanced Nutrition<br />
                                123 Nutrition Science Drive<br />
                                Cambridge, CB2 1TN<br />
                                United Kingdom
                            </p>
                        </div>
                        <div>
                            <h3 className="text-accent mb-2">Email</h3>
                            <p className="text-[#4a5a3c]">info@sian-institute.ac.uk</p>
                        </div>
                        <div>
                            <h3 className="text-accent mb-2">Phone</h3>
                            <p className="text-[#4a5a3c]">+44 (0)1234 567890</p>
                        </div>
                        <div>
                            <h3 className="text-accent mb-2">Office Hours</h3>
                            <p className="text-[#4a5a3c]">
                                Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM<br />
                                Saturday &ndash; Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="mb-6">Send a Message</h2>
                    <FeedbackForm />
                </div>
            </section>

            <section>
                <h2 className="mb-6">Department Contacts</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="p-4 rounded-lg bg-white/60 border border-[#28371c]/10">
                        <h3 className="text-sm mb-1">Admissions</h3>
                        <p className="text-sm text-[#6b7b5c]">admissions@sian-institute.ac.uk</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/60 border border-[#28371c]/10">
                        <h3 className="text-sm mb-1">Research Office</h3>
                        <p className="text-sm text-[#6b7b5c]">research@sian-institute.ac.uk</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/60 border border-[#28371c]/10">
                        <h3 className="text-sm mb-1">Student Services</h3>
                        <p className="text-sm text-[#6b7b5c]">students@sian-institute.ac.uk</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/60 border border-[#28371c]/10">
                        <h3 className="text-sm mb-1">Media Enquiries</h3>
                        <p className="text-sm text-[#6b7b5c]">press@sian-institute.ac.uk</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/60 border border-[#28371c]/10">
                        <h3 className="text-sm mb-1">Alumni Relations</h3>
                        <p className="text-sm text-[#6b7b5c]">alumni@sian-institute.ac.uk</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/60 border border-[#28371c]/10">
                        <h3 className="text-sm mb-1">IT Support</h3>
                        <p className="text-sm text-[#6b7b5c]">it-support@sian-institute.ac.uk</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
