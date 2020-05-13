// Methods
export const GET = "GET";

// Actions constants
export const CHANGE = "CHANGE";
export const TOUCH = "TOUCH";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const SET_DATA = "SET_DATA";

// Client routes
export const ROOT = "/";
export const MY_PLACES = "/u1/places";
export const ADD_PLACE = "/places/new";
export const AUTH = "/auth";
export const PLACES = "/places/";

// API routes
export const GET_PLACES_USER = "/places/user/";
export const GET_USERS = "/users";

export const POST_PLACES = "/places";
export const POST_SIGN_UP = "/users/signup";
export const POST_LOG_IN = "/users/login";

export const PATCH_PLACE = "/places/";

// Identifiers for validators
export const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
export const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
export const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
export const VALIDATOR_TYPE_MIN = "MIN";
export const VALIDATOR_TYPE_MAX = "MAX";
export const VALIDATOR_TYPE_EMAIL = "EMAIL";
export const VALIDATOR_TYPE_FILE = "FILE";
