
Yvi.ConfirmBoxProductSwipeView = Yn.SwipeView.extend( Yn.Btap, {

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
	}),

	bTap: function() {

		var info = {
			venue: this.get('venue'),
			product: this.get('selected')
		};

		this.get('manager').send('selectVenueProduct', info);

	}

});


Yvi.ConfirmScreenView = Yvi.ScreenView.extend({

	elementId: 'confirm-screen',

	user: null,
	venue:null,
	invitations: null,
	selected: null,

/*
	_productsChanged: Ember.observer(function() {

		var products = this.get('products');

		if ( !this.get('selected') && !!products && products.get('length') > 0 ) {

			this.set('selected', products.get('firstObject') );

		}

	}, 'products.@each'),
*/
	otherInvitations: Em.computed(function() {

		var result = Em.A([]),
				invitations = this.get('invitations'),
				selected = this.get('selected');

		if (invitations) {

			invitations.forEach( function (item) {
			
				if ( item.get('id') !== selected.get('id') ) {
					result.pushObject(item);
				}
				
			});

		}
		
		return result;

	}).property('invitations', 'selected')

});


