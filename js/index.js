$(document).ready(function() {
    $('#my_table').DataTable({
        dom: 'Bfrtip',
        buttons: [{
                extend: 'collection',
                text: 'Table control',
                buttons: [{
                        text: 'Toggle start date',
                        action: function(e, dt, node, config) {
                            dt.column(-2).visible(!dt.column(-2).visible());
                        }
                    },
                    {
                        text: 'Toggle salary',
                        action: function(e, dt, node, config) {
                            dt.column(-1).visible(!dt.column(-1).visible());
                        }

                    },
                    {
                        text: 'Test',
                        action: function(e, dt, node, config) {
                            dt.column(-1).visible(!dt.column(-1).visible());
                        }

                    }
                ]
            },
            {
                text: 'Button 2',
                className: 'Button',
                action: function(e, dt, node, conf) {
                    alert('Button 2 clicked on');
                }
            },
            {
                extend: 'collection',
                text: 'Table control',
                buttons: [{
                        text: 'Toggle start date',
                        action: function(e, dt, node, config) {
                            dt.column(-2).visible(!dt.column(-2).visible());
                        }
                    },
                    {
                        text: 'Toggle salary',
                        action: function(e, dt, node, config) {
                            dt.column(-1).visible(!dt.column(-1).visible());
                        }

                    },
                    {
                        text: 'Test',
                        action: function(e, dt, node, config) {
                            dt.column(-1).visible(!dt.column(-1).visible());
                        }

                    }
                ]
            },
            {
                extend: 'collection',
                text: 'Table control',
                buttons: [{
                        text: 'Toggle start date',
                        action: function(e, dt, node, config) {
                            dt.column(-2).visible(!dt.column(-2).visible());
                        }
                    },
                    {
                        text: 'Toggle salary',
                        action: function(e, dt, node, config) {
                            dt.column(-1).visible(!dt.column(-1).visible());
                        }

                    },
                    {
                        text: 'Test',
                        action: function(e, dt, node, config) {
                            dt.column(-1).visible(!dt.column(-1).visible());
                        }

                    }
                ]
            }
        ]
    });
});