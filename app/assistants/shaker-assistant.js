function ShakerAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

ShakerAssistant.prototype.handleButtonPress = function(event){
  // increment the total and update the display
     this.total++;
     this.controller.get("count").update(this.total);
};

ShakerAssistant.prototype.handleShaking = function(event) {
      this.total++;
      this.controller.get("count").update(this.total + " shake events");
      var timeDelta = new Date().getTime() - this.lastPlay;
      this.controller.get("magnitude").update("Time Delta: " + timeDelta);
      if (timeDelta > 2000) {
          this.jumpSound.currentTime = 0.0; // Rewind
          this.jumpSound.play();
          this.lastPlay = new Date().getTime();
      }
};

ShakerAssistant.prototype.setup = function() {

    this.controller.setupWidget(Mojo.Menu.appMenu,
            this.attributes = {
                omitDefaultItems: true
            },
            this.model = {
                visible: true,
        items: [
    {label: "Clear All Checks", command: 'do-clearChecks'}
    ]
            }); 

};

StageAssistant.prototype.handleCommand = function(event) {
    var currentScene = this.controller.activeScene();
    if(event.type == Mojo.Event.command) {
        switch(event.command) {
            case 'do-clearChecks':
                for (var i = 1; i <= 25; i++) {
                    document.getElementById('box' + i).checked = false;
                }
                break;
        }
    }
};

ShakerAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

ShakerAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

ShakerAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};


