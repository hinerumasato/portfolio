import { useContext } from "react"
import { context } from "../store/context"
import { IState } from "../interface"

export const HireBanner = () => {

    const [state] = useContext(context) as [IState];

    return (
        <section className="bg-gray p-0 section">
            <div className="container">
                <div className="card bg-primary">
                    <div className="card-body text-light">
                        <div className="row align-items-center">
                            <div className="col-sm-9 text-center text-sm-left">
                                <h5 className="mt-3">{state.dictionary.hireBanner.hireMeForYourProject}</h5>
                                <p className="mb-3">{state.dictionary.hireBanner.description}</p>
                            </div>
                            <div className="col-sm-3 text-center text-sm-right">
                                <a href="#contact" className="nav-link d-inline-block btn btn-light rounded text-black">{state.dictionary.hireBanner.hireMe}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
