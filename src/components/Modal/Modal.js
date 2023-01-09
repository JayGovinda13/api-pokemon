import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import {MainModal} from "./styleModal"

function Modal(props){

    const context = useContext(GlobalContext)

    const renderModal = ()=>{
        console.log(props)
        switch (props.action) {
            case 'add':
                return <>
                <h2>Temos que pegar!</h2>
                <p>Pokemon adicionado a sua Pokédex</p>
                </>
            
            case 'remove':
                return <>
                <h2>Professor Carvalho agradece!</h2>
                <p>O Pokemon foi removido da sua Pokédex</p>
                </>       
            default:
                return <>
                <h2>Ops!</h2>
                <p>Algo deu errado! Verifique.</p>
                </>                
        }
    }
    return(
        <>
        <MainModal onClick={()=>{context.setShowModal(false)}}>
        {/* <div></div> */}
        {/* <div> */}
            {renderModal()}
        {/* </div> */}
        </MainModal>
        </>
    )
}

export default Modal