import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPages } from "./../../actions";
import Section from "./shared/Section";

class PersonalAccident extends Component {

    componentDidMount() {

        this.props.fetchPages()
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        const {history} = this.props;

        let [page] = this.props.pages.filter(page => {
            return (page.name === "Personal Accident")
        });

        const currSections = page && page.sections;

        [page] = this.props.pages.filter(page => {
            return (page.name === "Common")
        });

        const commonSections = page && page.sections;

        return (
            <>
                <div className="row" >
                    <div className="container">
                        <h1>Personal Accident</h1>

                        {
                            currSections && currSections.map((section, idx) => {
                                return <Section section={section} pageName="Personal Accident" key={`section-${idx}`} history={history}/>
                            })
                        }

                        {
                            commonSections && commonSections.map((section, idx) => {
                                return <Section section={section} pageName="Common" key={`section-${idx}`} history={history}/>
                            })
                        }

                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

export default connect(mapStateToProps, { fetchPages })(PersonalAccident);