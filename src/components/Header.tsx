import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Jp, Us, Vn } from 'react-flags-select';
import { LanguageAction, IState } from '../interface';
import { context } from '../store/context';
import { changeLocale } from '../store/action';
import { Language } from '../enum/language';

export const Header = () => {

    const array = useContext(context);
    const [state, dispatch] = array as [IState, (action: LanguageAction) => void];
    const [show, setShow] = useState(false);
    const handleFlagClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLDivElement;
        const locale = target.getAttribute('data-locale') as Language;
        if(locale)
            dispatch(changeLocale(locale));
        setShow(false);
    }

    const mappingCurrentLanguageToNode = (language: Language) => {
        switch(language) {
            case Language.us:
                return <Us width={30} height={30} />;
            case Language.vn:
                return <Vn width={30} height={30} />;
            case Language.jp:
                return <Jp width={30} height={30} />;
            default:
                return <Us width={30} height={30} />;
        }
    }
    
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="/assets/imgs/logo.svg" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">{state.dictionary.nav.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">{state.dictionary.nav.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">{state.dictionary.nav.projects}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">{state.dictionary.nav.service}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary text-white" href="#contact">{state.dictionary.nav.contact}</a>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => setShow(true)} className="nav-link btn">
                                    { mappingCurrentLanguageToNode(state.currentLanguage) }
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="header" id="home">
                <div className="container">
                    <div className="infos">
                        <h6 className="subtitle">{state.dictionary.header.subtitle}</h6>
                        <h6 className="title">{state.dictionary.header.title}</h6>
                        <p className="position">{state.dictionary.header.position}</p>

                        <div className="buttons pt-3">
                            <button className="btn btn-primary rounded hire">{state.dictionary.header.hire}</button>
                            <a href="https://drive.google.com/uc?export=download&id=1s6HzcesDWtmYG4zJTP9jU8hIQEDqzCP8" className="btn btn-dark rounded download-cv">
                                {state.dictionary.header.downloadCv}
                            </a>
                        </div>

                        <div className="socials mt-4">
                            <a className="social-item" href="https://www.facebook.com/thangloi.tran.123.3.2/"><i
                                className="ti-facebook"></i></a>
                            <a className="social-item" href=""><i className="ti-google"></i></a>
                            <a className="social-item" href="https://github.com/hinerumasato"><i className="ti-github"></i></a>
                            <a className="social-item" href="https://www.linkedin.com/in/thắng-lợi-trần/"><i
                                className="ti-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="widget">
                    <div className="widget-item">
                        <h2>6</h2>
                        <p>{state.dictionary.widget.clients}</p>
                    </div>
                    <div className="widget-item">
                        <h2>4</h2>
                        <p>{state.dictionary.widget.projectCompleted}</p>
                    </div>
                    <div className="widget-item">
                        <h2>3</h2>
                        <p>{state.dictionary.widget.awardsWon}</p>
                    </div>
                </div>
            </header>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{state.dictionary.modal.selectYourLanguage}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row list-list-unstyled">
                        <div data-locale={Language.us} onClick={handleFlagClick} className='col' style={{ cursor: 'pointer' }}><Us width="100%" height={30} /></div>
                        <div data-locale={Language.vn} onClick={handleFlagClick} className='col' style={{ cursor: 'pointer' }}><Vn width="100%" height={30} /></div>
                        <div data-locale={Language.jp} onClick={handleFlagClick} className='col' style={{ cursor: 'pointer' }}><Jp width="100%" height={30} /></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setShow(false)} className="btn btn-secondary">{state.dictionary.modal.close}</button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}
