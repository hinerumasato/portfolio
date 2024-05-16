import { useContext } from "react"
import { context } from "../store/context"
import { IState } from "../interface"

export const Service = () => {

    const [state] = useContext(context) as [IState];

    return (
        <section id="service" className="section">
            <div className="container text-center">
                <h6 className="subtitle">{state.dictionary.nav.service}</h6>
                <h6 className="section-title mb-4">{state.dictionary.service.title}</h6>
                <p className="mb-5 pb-4">{state.dictionary.service.content}</p>

                <div className="row">
                    <div className="col-sm-6 col-md-3 mb-4">
                        <div className="custom-card card border">
                            <div className="card-body">
                                <i className="icon ti-desktop"></i>
                                <h5>{state.dictionary.service.frontend}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-4">
                        <div className="custom-card card border">
                            <div className="card-body">
                                <i className="icon ti-server"></i>
                                <h5>{state.dictionary.service.backend}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-4">
                        <div className="custom-card card border">
                            <div className="card-body">
                                <i className="icon ti-mobile"></i>
                                <h5>{state.dictionary.service.android}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-4">
                        <div className="custom-card card border">
                            <div className="card-body">
                                <i className="icon ti-linux"></i>
                                <h5>{state.dictionary.service.devops}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
