/* Node.js
1.-->Open Source-freely available for Public.
2.-->JavScript RunTime environment:-Its means it provide the additional/extra functionality.
3.-->Event Driven 
4.-->Blocking and Non-blocking I/O model.
Blocking means something that restricts your work.
blocking methods executes the synchronously.
Non-blocking- this methods executes asynchronous.

Node.js build up on the JavaScript core and c/c++

Node.js is a wrapper over JavaScript and c++ that gives us a low level API that we can invoke through javaScript.
which means that node.js code internally written in 
c/c++ and javascript because with it we can
 perform input/output operations and it is a hardware
  operation which we can do quite easy because
   it is low level and very fast and optimized.

   Which types of features/application are making with node Js
   use of node js
   1.Realtime application- like whatsapp chat,live communication.
   2.Single Page Application(SPA)
   3.IOT apps (IOT-Internet of things)
   4.Data Streaming.


   Architecture:-
   The architecture of Node.js comprises two main concepts:
   an Asynchronous model that resembles the event-based approach of
   JavaScript and Non-Blocking I/O operations.

   Components:-
   Node.js Architecture consist of several components that work together
   to handle incoming client requests and process responses.
   These components are:-
   1.Request
   2.Node.js server(v8 engine)
   3.Event Queue
   4.Event Loop
   5.thread pool
   6.External Responses


   Working-
   1.incoming client requests are received by Node.js
   which can be either simple(non-blocking) or complex(blocking),
   depending on the task to be performed.

  2.Querying for specific data involves searching for
  particular data in a database.

  3.deleting data involves sending requests to delete specific data 
  or performing a deleting query.
  
  4.Updating data involves sending requests to change
  or update a set  of data or performing an  updating
  query on a particular row of tables to update a specific entry in the databse.

  5.node.js adds incoming clients request to its event queue.
  6.The event loop in Node.js processes the requests one by one
  and checks whether external resources required the requests are allocated 
  external resources otherwise they move on to the next step.

  7.non-blocking(simple) requests are processed in the 
  event loop such as I/O pollling and response are respective clients.

  Advantages;-
 1. Its asynchronous model and non-blocking I/O operations improve 
  the scalability and performance of web Applications builts on other frameworks.
 
 2.node.js can easily handle multiple clients requests without
 required multiple threads,consuming less memory and resources.
 Additionaly it is highly scalable and provides high performance

 3.Node.js  is also flexible with multiple framework and makes the developement process easier.
 
*/

