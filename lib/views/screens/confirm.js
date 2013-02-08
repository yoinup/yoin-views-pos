Yvi.ConfirmScreenView = Yvi.ScreenView.extend({

	elementId: 'confirm-screen',

	user: null,
	venue:null,
	invitations: null,

	setMinHeight: false,


	selected: null,
	products: Em.computed(function() {

    var invitations = this.get('invitations');

    if ( !!invitations ) {
      return invitations.mapProperty('product');
    } else {
      return null;
    }

	}).property('invitations.@each'),

	otherInvitations: Em.computed(function() {

		var result = Em.A([]),
				invitations = this.get('invitations'),
				selected = this.get('selected');

		if (!!invitations) {

			invitations.forEach( function (item) {
			
				if ( item !== selected ) {
					result.pushObject(item);
				}
				
			});

		}
		
		return result;

	}).property('invitations.@each', 'selected')

});
