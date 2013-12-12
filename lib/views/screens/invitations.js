
Yvi.InvitationsOption = {
	pending: 'pending',
  consumed: 'consumed'
};

Yvi.InvitationsContentView = Yn.ScrollerView.extend({
  invitations: null,
  classNames: ['invitations-content'],

  hasInvitations: Em.computed(function() {
    return !!this.get('invitations');
  }).property('invitations'),

  classNameBindings: ['isSelected'],
  templateName: 'invitations_content'
});

Yvi.InvitationsScreenView = Yvi.ScreenView.extend({

	elementId: 'invitations-screen',

	_options: [{'name': 'pending', 'action': Yvi.InvitationsOption.pending},
						{'name': 'consumed', 'action': Yvi.InvitationsOption.consumed}],

	option: Yvi.InvitationsOption.pending,

	isPending: Em.computed(function() {

		return this.get('option') === Yvi.InvitationsOption.pending;

	}).property('option'),

	isConsumed: Em.computed(function() {

		return this.get('option') === Yvi.InvitationsOption.consumed;

	}).property('option'),

	invitations: null

});
