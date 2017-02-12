window.app = window.app || {}

document.addEventListener('DOMContentLoaded', function() {
var home = { name: 'home', url: '/',  component: app.AppComponent};

var Conjunctions = { name: 'Conjunctions', url: '/conjunctions',  component: app.Conjunctions };
var Interjections = { name: 'Interjections', url: '/interjections',  component: app.Interjections };
var Prepositions = { name: 'Prepositions', url: '/prepositions',  component: app.Prepositions };
var Pronouns = { name: 'Pronouns', url: '/pronouns',  component: app.Pronouns };
var Questions = { name: 'Questions', url: '/questions',  component: app.Questions };

app.AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule, ng.http.HttpModule, blah["ui-router-ng2"].UIRouterModule.forRoot({ states: [ Prepositions, Conjunctions, Pronouns,   Questions,  Interjections, home], useHash: true })],
    declarations: [app.AppComponent, app.Pronouns, app.Prepositions, app.Interjections, app.Conjunctions, app.Questions],
    bootstrap:    [app.AppComponent, app.Pronouns, app.Prepositions, app.Interjections, app.Conjunctions, app.Questions],
  })
  .Class({
    constructor: function(){}
  });
});
