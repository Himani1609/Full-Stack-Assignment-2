import './Contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Get in Touch</h2>
            <form>
                <div className="form-row">
                    <div className="input-group">
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="input-group">
                    <textarea id="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>

            <div className="contact-info">
                <p><i className="fa-solid fa-location-dot"></i> Mississauga</p>
                <p><i className="fa-solid fa-envelope"></i> <a href="mailto:himanibansal1691998@gmail.com">himanibansal1691998@gmail.com</a></p>
                <p><i className="fa-solid fa-phone"></i> <a href="tel:+14379681497">(437) 868-1497</a></p>
            </div>
        </section>
    );
}
