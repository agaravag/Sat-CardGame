
console.log("Let's play War and Peace. Lowest card wins, if Wild card wins, everyone wins!")




$("button").click(function(){
    alert("Value: " + $("#test2").val());
  });

console.log($("#test").val())
  function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    
    this.display = function() {
      var suits = ["Diamonds", "Clubs", "Spades", "Hearts"];
      var ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
      return ranks[this.rank - 1] + " of &nbsp" + suits[this.suit - 1] 
    }
  };
    
  function Deck() {
    this.cards = [];
    this.count = function() {
      return this.cards.length;
    };
    
    this.init = function() {
      for (s = 1; s <= 4; s++){
        for (r = 1; r <= 13; r++) {
          this.cards.push(new Card(r, s))
        }
      }
    };
    
    this.show = function() {
      for (var n = 0; n < this.cards.length; n++) {
        $("#deck").append("<li>Card: " + this.cards[n].rank + " of " + this.cards[n].suit + "</li>").
          hide();
        console.log(this.cards[n].suit + "-" + this.cards[n].rank);
      }
    };

    this.reveal = function() {
      $("#deck").fadeIn();
      $(this).fadeOut();
    }
  };

  function Hand() {
    var  me, you, wild, endList, t, item;
    d1 = new Deck();
    d1.init();
    
    endList = [];

    function Deal() {
      d1.cards.sort(function() {
        return 0.5 - Math.random()
      })
      var gameChoice=d1.cards.pop()
        return gameChoice
    }

    function Outcome(whoWon) {
      
     /* $("button").click(function(){
    alert("Deal a card for " + $("#playerOne").val());
 
    alert("Deal a card for " + $("#playerTwo").val());*/
 

      $("#handOutcome").append("<li>"+ $("#playerOne").val()+"'s card:  "+  
        me.display() + "<br>" + $("#playerTwo").val() +"'s card:  "+ you.display() + 
      " &nbsp &nbsp Wild Card: " + wild.display() + "</li>").hide();

      console.log("My card - "  + me.display());
      console.log("Your card - " + you.display());
      console.log("Wild card - " + wild.display());

      if (whoWon == 1) {
        console.log( "I win");
        $("#handOutcome").append("<li>"+$("#playerOne").val()+" wins<br><br></li>").hide();
      } else if (whoWon == 2) {
        console.log("You win");
        $("#handOutcome").append("<li>"+$("#playerTwo").val()+    " wins<br><br></li>").hide();
      } else if (whoWon == 3) {
        console.log("Tie");
        $("#handOutcome").append("<li>Tie<br><br></li>").hide();
      } else if (whoWon == 4) {
        console.log ("Wild wins");
        $("#handOutcome").append("<li>Wild wins<br><br></li>").hide();
      }

      /* });*/

    };

    this.revealOutcome = function() {
      $("#handOutcome").slideDown(9000);
      $(this).fadeOut(); alert("blah")
    };

    function ShowEndList() {
      console.log("List of cards played")
      while (endList.length > 0) {
          var item = endList.shift();
          
          $("#deckEndList").append("<li>List: " + item.display() + "</li>").hide()

        console.log(item.display());
      }
    }

    this.revealEndL = function() {
      $("#deckEndList").slideDown(9000);
      $(this).fadeOut();
    }

    for (t = 0; t < 10; t++) {
      me = Deal();
      you = Deal();
      wild = Deal();
      
      endList.push(me);
      endList.push(you);
      endList.push(wild);
      
      if (me.rank < you.rank) {
        Outcome(1);
        if (me.rank == wild.rank) {
          Outcome(4);
        } else {

        }
      } else if (me.rank > you.rank) {
        Outcome(2);
        if (you.rank == wild.rank) {
          Outcome(4);
        } else {

        }
      } else {
        Outcome(3);
      }

    }
    
    ShowEndList()
    
  }

  Start = Hand();

d1.show();

$("button#reveal-cards").on("click", d1.reveal);

$("button#reveal-end-list").on("click", revealEndL);

$("button#reveal-hand-outcome").on("click",revealOutcome)