/*  __** Static **__  */ 

console.log(" __Static Method__  ");

class Game {
    static score = 0;

    constructor(){
        this.isPlaying = false;
    }

    start(){
        this.isPlaying = true;
        console.log(` The game has started`);
    }
    end(){
        this.isPlaying = false;
        console.log(` The game has ended`);
        Game.updateScore();
    }
    static updateScore() {
        Game.score++;
        console.log(` Score : ${Game.score}`);
    }
}

const game = new Game();
game.start();
game.end();
game.end();

/*  __** Public and Private **__  */ 

// it's a Access Modifiers

console.log("  Access Modifiers - Public and Private ");

class BankAccount {
    #balance =0;  
     //using # we can store private can't access from outside of class

    // method
    deposit (amount){
        this.#balance +=amount;
        console.log(`deposited ${amount}, new balance is ${this.#balance}`);
    }

    withdraw(amount){
        if(amount > this.#balance){
           console.log(`Insuficient Balance`);
        }
        else{
            this.#balance -= amount;
            console.log(`Withdraw ${amount}, new balance is ${this.#balance}`);   
        }
    }
    balance (){
        console.log(this.#balance);
        
    }
}

const account = new BankAccount();
account.deposit(100);
account.deposit(100);
account.balance()
account.withdraw(50);

/*  __** try Catch and throw **__  */ 

console.log("try Catch and throw");


function d(a,b){
    try{
        if(b==0){
            throw new Error("Can't divide by 0")
        }
        else{
            console.log(a/b);
            
        }
    }catch(err){
        console.log(err.message);
        
    }
}

d(10,0);

/*  __** Fetch API **__  */ 

console.log(" __FetchAPI__ ");

fetch('myfile.txt')
.then(response => 
    {
        if (!response.ok){
            throw new Error('Network is not responce')
        }
        return response.text();
})
.then(data => console.log(data))
.catch(error => console.error(error));


// ADD Data in API

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    

/*  __** Fetch API from Json **__  */ 
console.log(" __FetchAPI from Json__ ");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => 
    {
        if (!response.ok){
            throw new Error('Network is not responce')
        }
        return response.json();
})
.then(data => data.forEach(element => 
    {
    console.log(element.id + "  " + element.title)
}
))
.catch(error => console.error(error));

