/* Npm:-
1.NPM (Node package Manager) is a package manager  for
Node.js applications.
2.It is cammand-line-utility that makes it easy to install,manage,and share packages of node.js code.
3. NPM is the default package manager for node.js, and it allows developers to easily 
install and manage dependencies for their Node.js projects.
4.NPM provides a central repository of packages,which developers
can browse and search to find the packages they need.
Packages can also be published to the repository, making it easy for 
other developers to discover and use them.

Package management
Dpenedency management 
Version control
Command line interface
Publishing & sharing packages
Script & automate

npm init:-
the npm  init command is  used to initialize a new or existing npm package.
It creates a package.json file that contains important information about the package,
such as its name, version, dependencies,and other metadata.

When an initializer is specified, it installs the corresponding
npm package named

create-<initializer>using npm-exec

how to check the npm version 
npm -v

for creating:-
mkdir name

for exit from the orevious 
cd ../

for creating package.json directly:-
npm init --y/yes

how to create multiple packages in a folder:-
npm init -w packages/p1


Examples:-
To create a new React-based project using create-react-app:-
npm init my-react-app

To generate a package.json file without any user input.
 npm init -yes/y

 To generate a plain old package.json using legacy init.
npm init -yes

to create a new workspace within a project:

npm init -w packages/p

to create a new React-based workspace within a project
npm my-react -w/my-react-app



Installing Packages in Node:-
  
  1. npm install package_name

install packages automatically add in the dependencies list
    means the packages we installed gets automatically added 
    the json.package:
   2. npm install package_name --save

   3.npm install package_name --save-dev

   for installing multiple packages:-
   
   4.npm install packages1 package2 package3 

   

   Uninstalling packages in node:-

   . npm uninstall package_name

uninstall packages automatically add in the dependencies list
    means the packages we installed gets automatically added 
    the json.package:
   2. npm uninstall package_name --save

   3.npm uninstall package_name --save-dev

   for uninstalling multiple packages:-
   
   4.npm uninstall packages1 package2 package3 



   Package.json

 1.the package.json file serves as the centerpiece of the node.js system and is considered the project's manifest file,
   containing crucial metadata information.
 2.Understanding and learning how to work with this file
 is  a fundamental aspect of working with Node.js.It serves as the first step towards becoming proficient in Node.js developement.
3.To be more specific,the metadata information in the package.json file can be divided into two categories.
The first category is identifying metadata properties, which includes details such as  the project's name
current version,author,license and project description.
4.The second category is functional metadata properties, which includes value related to the project's functionality, such as the entry or
starting point of the module, project dependencies, scripts being used and repository links for the Node.js project.

package.json file can be created in two ways:

1.using npm init: with this command, system expects user to fill the required information.
It provides with default value whcih are editable by the user.
2.Writing directly to file: you can  also  directly write into file with all the required information and can include it in your Node project.



*/