// $(document).ready(function() {
//     var table = $('#my_table').DataTable({
//         search: {
//             return: true,
//         },
//         dom: 'Bfrtip',
//         buttons: [{
//             text: 'Apply',
//             className: 'applyButton',
//             action: function(e, dt, node, config) {
//                 alert('Activated!');
//             }
//         }],
//     });
//     table.buttons().container()
//         .appendTo($('.col-sm-6:eq(0)', table.table().container()));
// });


$(document).ready(function() {
    var table = $('#my_table').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            className: 'applyButton',
            text: 'Button 1',
            action: function(e, dt, node, config) {
                alert('Button 1 clicked on');
            }
        }]
    });

    //     new $.fn.dataTable.Buttons(table, {
    //         buttons: [{
    //                 text: 'Button 2',
    //                 className: 'test',
    //                 action: function(e, dt, node, conf) {
    //                     alert('Button 2 clicked on');
    //                 }
    //             },
    //             {
    //                 text: 'Button 3',
    //                 className: 'Button',
    //                 action: function(e, dt, node, conf) {
    //                     alert('Button 3 clicked on');
    //                 }
    //             }
    //         ]
    //     });

    //     table.buttons(1, null).container().appendTo(
    //         table.table().container()
    //     );
    new $.fn.dataTable.Buttons(table, {
        buttons: [{
                text: 'High priority',
                action: function() {}
            },
            split: { text: 'Medium priority', action: function() {} },
            { text: 'Low priority', action: function() {} },
        ]
    }]
});



// });