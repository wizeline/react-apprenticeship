# SOLID
 SOLID is an acronym for a series of 5 principles, it was originally coined by Robert C Martin and they serve as a guide to healthy clean code. They where defined mostly for OOP but the wisdom they hold can and should be applied to every other area in software development regardless of the coding style or libraries and frameworks used.

<br/>

## Single Responsability
> **_"A class should have only one reason to change"_**

We can adapt this principle to our need and say that a component should have only one reason to change. The main idea is to avoid giving more than one responsibility to a software entity  (module,class, function, component etc.)  

<br/>

## Open Close principle
> **_"Software entities (classes, modules, functions, etc) should be open for extension, but closed for modification"_**

We know we have followed this principle when we can extend and adapt the functionalities of the module without changing the code that was already writen which means that we can extends and create new pieces of code on top of the ones we already have.
The key to achieve this principle is working with abstract code and letting the concrete consumers specify their behavior.

<br/>

## Liskov Substitution principle.
> **_"Subtypes must be substitutable for their base types"_**

This is most visible when using classes and interfaces, for example let's asume that we have a messaging Class that takes as input in the constructor an object of type Person, also let's assume that we have another type name Employee that is a subtype of Person, if we follow the Liskov subsitution principle we should be able to pass a Person and Employee to Message.

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

Let's look at the example, we have an interface for a Car with a series of methods that most be implemented. Look at the method honk, this will be valid for cars but maybe not for an excavator forcing us to implement a not needed method that at the end throws an error.

                interface Vehicule {
                        honk() : void;
                        move() : void;
                        turnLeft() : void;
                        turnRight() : void;
                        stop() : void;
                }

                class Excavator implements Vehicule {
                        honk(){
                               throw new Error('not implemented');
                        }
                }


Following the interface segregation principle we can fix this issue by making many smaller especialized interfaces like so:

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

Note: A detail means a concrete implementation. Also a detail can be the concrete technology used to store data (DB system).

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

It will be a violation if this core class implements concrete details related to MySQL like building the querys, instead is better to create an interface that specify the operations with the DB and inject it to the class Account, this way the Account don't depend on a concrete DB and multiple can be used when needed, also this allow for the Account class to be more simpler and have only one responsibility.


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

        

Thanks to this abstractions now is possible to re use the Account class to manage different storages.

        //Different concrete implementations of Storage interface
        const mysqlStorage = new MySQLStorage();
        const mongodbStorage = new MongoDBStorage();
        const restStorage = new RestStorage();

        //We can re use the logic and store it any where we want
        const accountWithMySQL = new Account(mysqlStorage);

        const accountWithMongoDB = new Account(MongoDBStorage);

        const accountWithRest = new Account(restStorage);

