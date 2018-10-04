M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var fix_btn_instances = M.FloatingActionButton.init(elems, { direction: 'top' });

    var nav = document.querySelectorAll('.sidenav');
    var nav_instances = M.Sidenav.init(nav, { edge: 'right', draggable: 'true'});
    
    var modalelems = document.querySelectorAll('.modal');
    var mod_instances = M.Modal.init(modalelems, {}); 
    
    var paraElems = document.querySelectorAll('.parallax');
    var para_instances = M.Parallax.init(paraElems, {});
   
});