# S.O.L.I.D.
 S.O.L.I.D. is an acronym for a series of 5 principles, coined by Robert C. Martin, and they serve as a guide to a healthy, clean code. They were defined originally for Object-Oriented Programming, but the wisdom they hold can and should be applied to every other area in software development regardless of the coding style, libraries, and frameworks used.

<br/>

## Single Responsability
> **_"A class should have only one reason to change"_**

We can adapt this principle to our needs and say that a component should have only one reason to change. The main idea is to avoid giving more than one responsibility to a software entity (module, class, function, or component).  

<br/>

## Open Close principle
> **_"Software entities (classes, modules, functions, etc) should be open for extension, but closed for modification"_**

We know we have followed this principle when we can extend and adapt the module's functionalities without changing the code already written, which means that we can extend and create new pieces of code on top of the ones we already have. The key to achieving this principle is working with abstract code and letting the concrete consumers specify their behavior.

<br/>

## Liskov Substitution principle.
> **_"Subtypes must be substitutable for their base types"_**

This principle is most visible when using classes and interfaces. For example, we have a `Message` class, and its input is the **constructor** of an object of type `Person`. Also, let us assume that we have another type named `Employee`, a subtype of `Person`. If we follow the **Liskov Substitution Principle**, we should pass a `Person` and `Employee` to `Message`.

        //Employee is a subtype of Person
        
        //This will work
        const person  = new Person()
        const message = new Message(person);
        message.send()

        //This will also work because Employee is a subtype of Person
        const employee = new Employee();
        const message = new Message(employee);
        message.send()


<br/>


## Interface segregation

> **_" Clients should not be forced to depend on methods that they don't use."_**

Let us look at the below example. We have an interface for a `Car` with a series of methods that must be implemented. Look at the method `honk`, and this will be valid for cars *but not* for an excavator forcing us to implement a not-needed method that, in the end, throws an error.

                interface Vehicule {
                        honk() : void;
                        move() : void;
                        turnLeft() : void;
                        turnRight() : void;
                        stop() : void;
                }

                class Excavator implements Vehicule {
                        honk(){
                               throw new Error("Excavators don't honk");
                        }
                }


Following the **Interface Segregation Principle** we can fix this issue by making many smaller specialized interfaces like so:

                interface Vehicule {
                        move():void;
                        turnLeft() : void;
                        turnRight() : void;
                        stop() : void;
                }

                interface Car extends Vehicule {
                        honk() : void;
                }

                class Excavator implements Vehicule{
                        // Now we only need to implement the methods we will use.
                }

<br />

## Dependency Inversion

> **_"High-level modules should not depend on low-level modules. Both should depend on abstractions."_** 

> **_" Abstraction should not depend on details. Details should depend on abstractions. "_**

**Note**: A detail means a concrete implementation. Also a detail can be the concrete technology used to store data (Database system).

Let's asume we have a very simple accounting system that let's us manages account by making deposits and withdraws and we deside to use a concrete Database (MySQL for example). The core of the system will go into a class named Account wich will have some logic implemented like for example you can't withdraw more than you have in you account.

        class Account {
                accountAmount : number;

                deposit(amount : number) {
                        // Implementation
                }

                withdraw(amount : number){
                        // Implementation
                }
        }

If this **Core Class** implements concrete details related to **MySQL**, it will be a violation, like building the queries instead. It is better to create an interface that specifies the operations with the DB and injects it into the class `Account`. This way, the `Account` does not depend on a concrete DB, and multiple can be used when needed. Also, this allows for the `Account` class to be simpler and have only one responsibility.


        interface Storage {
                movement(accountId, amount)
        }

        class MySQLStorage implements Storage {
                movement(accountId, amount){
                        // Will implement concrete logic 
                        // to handle the communication with a 
                        // MySQL Server
                }
        }

        class MongoDBStorage implement Storage {
                movement(accountId, amount){
                        // Will implement concrete logic 
                        // to handle the communication with a 
                        // MongoDB server
                } 
        }

        class RestStorage implement Storage {
                movement(accountId, amount){
                        // Will implement concrete logic 
                        // to handle the communication with a 
                        // Rest API
                } 
        }


        class Account {
                accountId : number;
                accountAmount : number;
                storage : Storage;

                constructor(storage : Storage){
                        this.storage = Storage;
                }
                
                deposit(amount : number) {
                        // Implementation
                        // Logic first
                        if(amount <= 0){
                                throw new Error("Amount most be greater than 0");
                        }
                        this.accountAmount += amount;

                        this.storage.movement(this.accountId, amount);
                }

                withdraw(amount : number){
                        // Implementation
                        if(amount <= 0){
                                throw new Error("Amount most be greater than 0");
                        }

                        if (amount > this.accountAmount) {
                                throw new Error("Not enough credit.")
                        }

                        this.accountAmount -= amount;
                        this.storage.movement(this.accountId, amount);
                }

        }

        

Thanks to this abstractions now, it is possible to re-use the `Account` class to manage different storages.

        //Different concrete implementations of Storage interface
        const mysqlStorage = new MySQLStorage();
        const mongodbStorage = new MongoDBStorage();
        const restStorage = new RestStorage();

        //We can re use the logic and store it any where we want
        const accountWithMySQL = new Account(mysqlStorage);

        const accountWithMongoDB = new Account(MongoDBStorage);

        const accountWithRest = new Account(restStorage);

