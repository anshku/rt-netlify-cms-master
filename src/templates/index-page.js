import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import Navbar from "../components/Navbar"
import NavbarMobileView from "../components/NavbarMobileView"
import Footer from "../components/footer"
import Home from "../components/Home"

class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        isMobileView: false,
    }
}

componentDidMount() {
    if (window.innerWidth < 768 ) {
        this.setState({ isMobileView : true})
    }else {
      this.setState({ isMobileView : false})
    }
}
  render() {
  return (
    <Layout>
      {this.state.isMobileView ? <NavbarMobileView /> : <Navbar/> }
      <Home/>
      <Footer/>
    </Layout>
  )
 }
}

IndexPage.propTypes = {}

export default IndexPage
