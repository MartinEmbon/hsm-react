import {IGlobalState} from "../../store/modules/user/types"
import {useSelector} from "react-redux"
import {FooterLayout} from "./style"

export default function Footer() {
    const state = useSelector((state: IGlobalState )=>state.users)
    return (        
        <FooterLayout>
            <p>Gama Academy</p>
            <br/>
            <p>Temos {state.length} cadastrados</p>
        </FooterLayout>        
    )
}
