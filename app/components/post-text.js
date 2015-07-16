import Ember from 'ember';

export default Ember.Component.extend({
	 watchingVal: function(){
	 	console.log(JSON.stringify(this.get('title')))
	 	if (this.get('title.length') ===0){	
	 		alert('title','Empty');
	 	}
	 }.observes('title')
});