import emailjs from '@emailjs/browser';
import { FormEvent, LegacyRef, useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { context } from '../store/context';
import { IState } from '../interface';
export const Contact = () => {
    const [state] = useContext(context) as [IState];
    const form = useRef<HTMLFormElement>();
    const [disable, setDisable] = useState(false);
    const { emailJS } = state;
    const { serviceID, templateID, publicKey } = emailJS;

    const handleSendMail = async (e: FormEvent) => {
        e.preventDefault();
        setDisable(true);
        const formElement = form.current as HTMLFormElement;
        const response = await emailjs.sendForm(serviceID, templateID, formElement, {
            publicKey: publicKey,
        });

        if(response.status === 200) {
            setDisable(false);
            toast.success(state.dictionary.contact.successMessage, {
                position: 'top-center'
            })
        }
        
    }

    return (
        <section id="contact" className="position-relative section">
            <div className="container text-center">
                <h6 className="subtitle">{state.dictionary.contact.subtitle}</h6>
                <h6 className="section-title mb-4">{state.dictionary.contact.title}</h6>

                <div className="contact text-left">
                    <div className="form">
                        <h6 className="subtitle">{state.dictionary.contact.available}</h6>
                        <h6 className="section-title mb-4">{state.dictionary.contact.subtitle}</h6>
                        <form ref={form as LegacyRef<HTMLFormElement>} onSubmit={handleSendMail}>
                            <div className="form-group">
                                <input type="hidden" name="toName" value={'Trần Thắng Lợi'} />
                                <input name="customerEmail" type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder={state.dictionary.contact.enterYourEmail} required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="" cols={30} rows={5} className="form-control"
                                    placeholder={state.dictionary.contact.message}></textarea>
                            </div>
                            <button onClick={(e) => { if (disable) { e.preventDefault(); toast.error(state.dictionary.contact.errorMessage, { position: 'top-center' }) } }} type="submit" className="btn btn-primary btn-block rounded w-lg">
                                {disable ? (
                                    <span className="loader"></span>
                                ) : (
                                    <span>{state.dictionary.contact.sendMessage}</span>
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="contact-infos">
                        <div className="item">
                            <i className="ti-location-pin"></i>
                            <div className="">
                                <h5>{state.dictionary.contact.location}</h5>
                                <p>Ho Chi Minh City, Thu Duc District</p>
                            </div>
                        </div>
                        <div className="item">
                            <i className="ti-mobile"></i>
                            <div>
                                <h5>{state.dictionary.contact.phoneNumber}</h5>
                                <p>+84 879 603 547</p>
                            </div>
                        </div>
                        <div className="item">
                            <i className="ti-email"></i>
                            <div className="mb-0">
                                <h5>{state.dictionary.contact.emailAddress}</h5>
                                <p>thangloitran406@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0709101917423!2d106.77992637465708!3d10.882211289273025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zS8O9IHTDumMgeMOhIEtodSBCIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1715796927058!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
