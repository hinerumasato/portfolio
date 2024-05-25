import { useContext } from "react"
import { context } from "../store/context"
import { IState } from "../interface"

export const Skill = () => {

    const [state] = useContext(context) as [IState];

    return (
        <section className="section">
            <div className="container text-center">
                <h6 className="subtitle">Skills</h6>
                <h6 className="section-title mb-4">{state.dictionary.skill.title}</h6>
                <p className="section-content mb-4">{state.dictionary.skill.content}</p>
                <div className="row text-left">
                    <div className="col-sm-6">
                        <h6 className="mb-3">Java Core</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }}><span>89%</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h6 className="mb-3">Java Servlet</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '83%' }}><span>83%</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h6 className="mb-3">Java Servlet</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '83%' }}><span>83%</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h6 className="mb-3">Laravel</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }}><span>90%</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h6 className="mb-3">HTML, CSS (SCSS), Javascript</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }}><span>90%</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h6 className="mb-3">ReactJS</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }}><span>85%</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h6 className="mb-3">ExpressJS</h6>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }}><span>85%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
