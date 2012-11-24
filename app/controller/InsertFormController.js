Ext.define('SmartPillCase.controller.InsertFormController', {
	extend: 'Ext.app.Controller',  
	requires: [
		"Ext.device.Device",
		"Ext.device.Camera"
	],
		
	config: {
		refs: {
			main: "main",
			imageView: "insertFormPanel",
			img: "insertFormPanel img"
		},
		control: {
			"nativeapiview button[action=device]": {
				tap: "onDeviceTap" 
			},
			"nativeapiview button[action=camera]": {
				tap: "onCameraTap" 
			},
			"insertFormPanel button[action=cameraCapture]": {
				tap: "onCameraCaptureTap" 
			},
			"insertFormPanel button[action=album]": {
				tap: "onAlbumTap" 
			}
		}
	},

	onDeviceTap: function() {
		Ext.Msg.alert(
			"Device Name: " + Ext.device.Device.name,
			"Device Platform: " + Ext.device.Device.platform	
		);
	},
	
	onCameraTap: function() {
		this.getMain().setActiveItem(this.getImageView());
	},
	
	onCameraCaptureTap: function() {
		console.log('c1');
		var img = this.getImg();		
		Ext.device.Camera.capture(
			{
				source: "camera",
				destination: "file",
				success: function(url) {
					img.setSrc(url);
				}
			}
		);
	},

	onAlbumTap: function() {
		console.log('c2');
		var img = this.getImg();
		Ext.device.Camera.capture(
			{
				source: "album",
				destination: 'file',
				success: function(url) {
					img.setSrc(url);
				}
			}
		);
	}
});