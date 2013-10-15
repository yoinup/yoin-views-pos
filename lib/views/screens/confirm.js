Yvi.ConfirmScreenView = Yvi.ScreenView.extend({

	elementId: 'confirm-screen',

	user: null,
	venue:null,

	setMinHeight: false,

	selected: null,
	productUnit: null,

  canConfirmInvitation: Em.computed(function() {

    var result = false,
        invitation = this.get('selected');

    if ( !!invitation ) {
      result = !invitation.get('consumed') && !invitation.get('expired');
    } else {
			var productUnit = this.get('productUnit');
			if (!!productUnit) {
				result = !productUnit.get('consumed');
			}
		}



    return result;

  }).property('selected')

});
