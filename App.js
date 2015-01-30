Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    launch: function() {
        this.add([
                        {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                    {
                        flex: 3,
                        html: '<table width=\"100%\" border=\"0\"><tr><td width=\"10%\" style=\"border-bottom: solid;\"><img src=\"http://siliconangle.com/files/2013/11/cisco-logo.png\" width=\"70%\" height=\"25%\"></td><td valign=\"middle\" style=\"border-bottom: solid; border-color:#E4E5E6\"><font color=\"#006699\" size=\"5\" style=\"font-family:impact\"> &nbsp;Unified Commerce Experience</font> &nbsp;<font color=\"#990000\" size =\"5\" style=\"font-family:impact\">Scrum Dashboard</font>&nbsp;<font color=\"#000000\" size =\"5\" style=\"font-family:impact\">:&nbsp;Iteration 14</font></td></tr></table>'
                        //html: 'Unified Commerce Experience'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                    {
                        flex: 1,
                        html: '<H1>Title 1</H1>'
                    },
                    {
                        flex: 1,
                        html: '<H1 id="title2">Title 2</H1>'
                    },
                    {
                        flex: 1,
                        html: '<H1>Title 3</H1>'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    Ext.apply({flex: 2}, this.createDefectGrid()),
                    Ext.apply({flex: 1}, this.createDefectGrid())

                ]
            },
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    Ext.apply({flex: 1}, this.createDefectGrid()),
                    Ext.apply({flex: 1}, this.createDefectGrid())
                ]
            }
        ]);


    },

    createDefectGrid: function() {
        return {
            xtype: 'rallygrid',
            autoLoad: true,
            columnCfgs: [
                'FormattedID',
                'Name',
                'Owner'
            ],
            storeConfig: {
                model: 'defect'
            },
            styles: {

            }
        };
    }
});