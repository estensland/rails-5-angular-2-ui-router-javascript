document.addEventListener('DOMContentLoaded', function() {
  grammarApp.AppComponent =
    ng.core.Component({
      template: `
        <div class="container">
          <h1>Grammar</h1>
          <div>
            <a uiSref="Comjunctions">Comjunctions</a>
            <span>
              -
            </span>
            <a uiSref="Interjections">Interjections</a>
            <span>
              -
            </span>
            <a uiSref="Prepositions">Prepositions</a>
            <span>
              -
            </span>
            <a uiSref="Pronouns">Pronouns</a>
            <span>
              -
            </span>
            <a uiSref="Questions">Question Words</a>
          </div>

          <ui-view>
          </ui-view>


        </div>
      `
    })
    .Class({
      constructor: [ng.http.Http, function(http){

      }],
    });
});

