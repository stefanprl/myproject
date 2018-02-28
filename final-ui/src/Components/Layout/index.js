import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import './layout.css';
import Header from '../Header';
import Footer from '../Footer';
import AdminContentArea from "../Admin/content-area";
import LandingPage from "../../Pages/landing-page";


class Layout extends Component {
    constructor(props){
        super(props);
        this.state={
            userRoleId: null,
            isLogged: false,

        }
    }
    render() {

        return (
            <div>
                <Grid container spacing={24}>

                    <Grid item xs={12}>

                        <Header/>

                    </Grid>
                    {this.state.isLogged === true ?
                    <Grid item md={12}>

                        <div className="sub-header"></div>
                    </Grid>
                        : null}
                    <Grid item xs={12}>
                        {this.state.isLogged === false ? <LandingPage/> : null}
                        {this.state.userRoleId === 1 && this.state.isLogged === true? <AdminContentArea/> : null}
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Footer/>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Layout;