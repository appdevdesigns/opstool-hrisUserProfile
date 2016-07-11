/**
 * This file specifies any default Ops Portal Tool Definitions 
 * provided by this modlue.
 *  
 */
module.exports = [

    { 
        key:'hris.profile', 
        permissions:'adcore.developer, hris.profile', 
        icon:'fa-user', 
        controller:'HrisUserProfile',
        label:'opp.toolProfile',
        context:'opsportal',
        isController:true, 
        options:{}, 
        version:'0' 
    }

];
