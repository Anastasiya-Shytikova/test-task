$(document).ready(function() {
    $('#my_table').DataTable({
        buttons: [{
            text: 'Apply',
            className: 'applyButton',
            action: function(e, dt, node, config) {
                alert('Activated!');
            }
        }]
    })
});

// $(document).ready(function() {
//     $('#my_table_wrapper').DataTable({
//         dom: '<"toolbar">frtip',
//         fnInitComplete: function() {
//             $('div.toolbar').html('<b>Custom tool bar! Text/images etc.</b>');
//         }
//     });
// });