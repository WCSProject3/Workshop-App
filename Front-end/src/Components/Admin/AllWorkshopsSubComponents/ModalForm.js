import React from 'react';
import WorkshopFormEdit from './WorkshopFormEdit';

const ModalForm = ( { workshopInEdit, toggleDisplayModal } ) => {
    return ( 
        <div>
            <WorkshopFormEdit 
            workshopInEdit={workshopInEdit}
            toggleDisplayModal={toggleDisplayModal}/>
        </div>
    );
}
 
export default ModalForm;