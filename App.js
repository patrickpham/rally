Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
        this.update("Hello World");
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
});
