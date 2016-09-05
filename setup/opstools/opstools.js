/**
 * This file specifies any default Ops Portal Tool Definitions 
 * provided by this modlue.
 *  
 */
module.exports = [

    { 
        key:'hris.profile', 
        permissions:'hris.profile', 
        icon:'fa-user', 
        controller:'HrisUserProfile',
        label:'Hris User Profile - demo',
        // context:'opsportal',
        isController:true, 
        options:{}, 
        version:'0' 
    }

];
