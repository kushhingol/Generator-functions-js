# Generator-functions-js
Generator Function Capability in javascript

- The repository contains an experiment to test the capability of generator function in a single threaded javascript environment.
- The experiment is basically to test the execution time of large data set when implemented by generator function.

**Following were the conculsion of the experiment**

- In the experiment it was observed that the execution time for large data is very less as compared to the execution time of large data set with a traditional for loop approach.
- The generator function provides the feature of lazy execution and memore optimization.
- With the capability of laziness and optimized execution, the generator functions can be utilized on the browser side (web applications) as well where we can render a large amount of data lazily and can also optimize its execution time as well.
- Since the generator function returns a special iterable object, it becomes very easy for data modification/manipulation or processing as we have access to each object of the iterable array.
- In the single thread environment of javascript, the generator functions help us a lot by pushing the limits and allowing us to run and execute heavy non I/0 processes in an optimized way.
- Generator Functions are pretty much a well-known approach in python where large data sets need to be processed in many data science studies and analysis.

To the run the project following steps should be followed
- Step 1: Clone the project 
```git clone https://github.com/kushhingol/Generator-functions-js.git```
- Step 2: Npm Install
```npm install```
- Step 3: Running the experiment
```node index.js```
