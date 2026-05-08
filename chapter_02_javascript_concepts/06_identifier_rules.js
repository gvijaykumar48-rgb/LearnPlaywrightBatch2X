// Identifier Rules and Naming Conventions in JavaScript

// 1. Snake Case - words separated by underscores
let user_name = "John";
let user_age = 25;
let is_active = true;

// 2. Camel Case - first word lowercase, subsequent words capitalized (MOST COMMON IN JS)
let userName = "John";
let userAge = 25;
let isActive = true;
let getUserDetails = function() {};

// 3. Pascal Case - all words capitalized (used for classes and constructors)
class UserProfile {}
class DatabaseConnection {}
function UserController() {}

// 4. Constant Case - all uppercase with underscores
const MAX_USERS = 100;
const API_KEY = "secret_key";
const DATABASE_URL = "http://localhost:3000";

// 5. Hungarian Notation - prefix indicating data type (rarely used in modern JS)
let strName = "John"; // str = string
let numAge = 25; // num = number
let boolIsActive = true; // bool = boolean

// Valid Identifiers
let $price = 100;
let _privateVar = "private";
let name123 = "valid";
let UPPERCASE = "valid";

// Invalid Identifiers
// let 123name = "invalid"; // Cannot start with number
// let user-name = "invalid"; // Cannot contain hyphen
// let user name = "invalid"; // Cannot contain space
// let class = "invalid"; // Cannot use reserved keyword
