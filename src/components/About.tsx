import { useContext } from "react"
import { context } from "../store/context"
import { IState } from "../interface";

export const About = () => {

    const [state] = useContext(context) as [IState];

    return (
        <section id="about" className="section mt-3">
            <div className="container mt-5">
                <div className="row text-center text-md-left">
                    <div className="col-md-3">
                        <img src="/assets/imgs/avatar.jpg" className="img-thumbnail mb-4" />
                    </div>
                    <div className="pl-md-4 col-md-9">
                        <h6 className="title">{state.dictionary.about.title}</h6>
                        <p className="subtitle">{state.dictionary.about.subtitle}</p>
                        <p dangerouslySetInnerHTML={{ __html: state.dictionary.about.content }}></p>
                        <p></p>
                        <p><strong>{state.dictionary.about.careerGoals}</strong></p>
                        <ul>
                            <li>
                                <p dangerouslySetInnerHTML={{ __html: state.dictionary.about.careerGoalsContent1 }}></p>
                            </li>
                            <li>
                                <p dangerouslySetInnerHTML={{ __html: state.dictionary.about.careerGoalsContent2 }}></p>
                            </li>
                        </ul>
                        <a href="https://drive.google.com/uc?export=download&id=1s6HzcesDWtmYG4zJTP9jU8hIQEDqzCP8" className="btn btn-primary rounded mt-3">{state.dictionary.about.downloadCv}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
