
Yvi.ConfirmBoxProductSwipeView = Yn.SwipeView.extend({

	width: 320,
	classNames: ['confirm-box-products-swipe'],

	content:null,
	selected:null,

	swipeOptions: {
		direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
		cancelPeriod: 100,
		simultaneously: true,
		swipeThreshold: 20,
		initThreshold: 10
	},

	itemViewClass: Em.View.extend( Yn.IsLoading, {
		tagName: 'img',
		attributeBindings: ['src'],
		classNames: ['confirm-product'],
		srcBinding: 'content.product.picture'
	})

});


Yvi.ConfirmScreenView = Yvi.ScreenView.extend({

	elementId: 'confirm-screen',

	user: null,
	venue:null,
	invitations: null,
	selected: null,

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

	}).property('invitations', 'selected')

});
