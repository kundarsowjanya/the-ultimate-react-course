import { useState } from "react"
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import Modal from "../../ui/Modal"
import CabinTable from "./CabinTable"

function Addcabin(){
    return(
    <div>
       <Modal>
         <Modal.Open opens="cabin-form">
            <Button>Add new cabin</Button>
         </Modal.Open>
         <Modal.Window name="cabin-form">
            <CreateCabinForm/>
         </Modal.Window>
{/* 
         <Modal.Open opens="table">
            <Button>Show table</Button>
         </Modal.Open>
         <Modal.Window name="table">
            <CabinTable/>
         </Modal.Window> */}


       </Modal>
       </div>
    )
}

// function Addcabin() {
//      const [isOpenModal,setIsOpenModel]=useState(false)

//     return (
//         <div>
//              <Button onClick={()=>setIsOpenModel(!isOpenModal)}>Add new cabin</Button>
                  
//                   {isOpenModal&&<Modal setIsOpenModel={setIsOpenModel}><CreateCabinForm onCloseModal={()=>setIsOpenModel(false)} /></Modal>}
//         </div>
//     )
// }

export default Addcabin
