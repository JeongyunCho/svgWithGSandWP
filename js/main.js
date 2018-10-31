(() => {

    const top= document.querySelector("#beer1");

    //define a waypoint and have something happen on scroll
    var waypoint = new Waypoint({
        element: document.querySelector('#beer2').querySelector('.svg-graphic'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!');
          runAnimation(this.element, ["rGlass","cGlass","lGlass"]);
        },
        offset: 100
      });

      var waypoint = new Waypoint({
        element: document.querySelector('#beer3').querySelector('.svg-graphic'),
        handler: function(direction) {
          console.log('Scrolled to waypoint2!');
          runAnimation(this.element, ["lBarrel","cBarrel","rBarrel"]);
        }
      });


    function runAnimation(parent, elements){
        //should run on a waypoint or user interaction
        console.log("run animations here");

        let innerSVG = parent.contentDocument;
        
        //set up animation properties

        let animProps = {};
        switch (parent.id) {
            case "bottle":
            animProps = {scaleX: 1.2, scaleY: 1.2, rotation: 360, transformOrigin: "50% 50%"};
            break;

            case "barrels":
            animProps = {scaleX: 1.2, scaleY: 1.2, transformOrigin: "50% 50%"};
            break;

            case "glasses":
            animProps = {scaleX: 1.5, scaleY: 1.5, transformOrigin: "50% 50%"};
            break;

            default:
            //do nothing
            break;
        }

        //simple vector animation with Greensock
        elements.forEach(item => {
            let target = innerSVG.querySelector(`#${item}`);
            TweenMax.to(target, 0.6, animProps);
        })
    }

    top.addEventListener("mouseover", function(){
        //debugger;
        //console.log(this);
        runAnimation(this.querySelector('.svg-graphic'), ["lStar", "rStar"]);
    })

})();