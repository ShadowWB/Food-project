# Food-project

The page was built using webpack and es6 modules,also here we used Babel compiler polyfills.
But in order for the website to work on the Internet, I made a modification,now everything works on pure JavaScript except get and post requests.

for run with server and DB:
 modified:   index.html // unlock: <!--<script src="js/bundle.js"></script>--> and lock or remove: <script src="js/draft.js"></script>
modified:   js/draft.js //no need

start server -> json-server db.json -> npx webpack
