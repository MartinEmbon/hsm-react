
import {Container} from "./style"
import {Link} from "react-router-dom"
import {api} from "../../serverless/api"
import NavBar from "../../components/Nav"
import Footer from "../../components/Footer"

const Courses: React.FC = () => {    

    return (
        <>
        <NavBar/>        
        <Container>
            Courses       
        </Container>
        <Footer/>
        </>
    )
}

export default Courses;