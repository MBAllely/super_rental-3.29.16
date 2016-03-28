import Ember from 'ember'; // gives access to actual Ember library as the variable Ember
import config from './config/environment'; //provides access to app's configuration data as variable config

const Router = Ember.Router.extend({ //defines a constant called Router--a constant is a variable that can't be reassigned
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
}); //this is the route handler

export default Router; //makes the Router constant available to other parts of the application, similar to the way we've exported modules previously

// to generate a route use:
// ember generate route whatever or ember g for short