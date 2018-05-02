function Button(text) {
  this.text = text || "High five!";
}
Button.prototype = {
    create: function() {
      var self = this;
      this.$element = $('<button>');
      this.$element.text(this.text);
      this.$element.click(function(){
        alert(self.text);
      });
        this.$element.appendTo($('body'));
    }
  };

  Button.prototype.setClass = function() {
      var self = this;
      this.$element.click(function(){
        if ((self.text === "Stop!") || (self.text === "Watch out!")) {
          self.$element.addClass("danger");
        }
        else {
          self.$element.addClass("greetings");
        }
      });
    };


var btn1 = new Button("Hello!");
btn1.create();
btn1.setClass();
console.log(btn1.setClass());
var btn2 = new Button("Stop!");
btn2.create();
btn2.setClass();
var btn3= new Button("Hi!");
btn3.create();
btn3.setClass();
var btn4= new Button("Watch out!");
btn4.create();
btn4.setClass();
