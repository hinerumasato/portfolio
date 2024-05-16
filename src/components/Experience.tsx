import { useContext } from "react"
import { context } from "../store/context";
import { IState } from "../interface";

export const Experience = () => {

    const [state] = useContext(context) as [IState];

    return (
        <section id="portfolio" className="section">
            <div className="container text-center">
                <h6 className="section-title mb-4">{state.dictionary.experience.title}</h6>
                <h6 className="subtitle">{state.dictionary.experience.subtitle}</h6>
                <div className="row">
                    <div className="col-sm">
                        <div className="img-wrapper">
                            <img src="/assets/imgs/folio-1.jpg" alt="" />
                            <div className="overlay">
                                <div className="overlay-infos">
                                    <h5>{state.dictionary.experience.project1}</h5>
                                    <a title={state.dictionary.experience.github} href="https://github.com/hinerumasato/WonkidsNew.git"><i className="ti-github"></i></a>
                                    <a title={state.dictionary.experience.production} href="https://wonkidsclub.net"><i className="ti-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="img-wrapper">
                            <img src="/assets/imgs/folio-2.jpg" alt="" />
                            <div className="overlay">
                                <div className="overlay-infos">
                                    <h5>{state.dictionary.experience.project2}</h5>
                                    <a title={state.dictionary.experience.github} href="https://github.com/hinerumasato/Udemy.git"><i className="ti-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
