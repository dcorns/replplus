#replplus
A modified repl for testing modules that is set to:
 * Prevent node repl from returning undefined when an action does not return a value.
 * Run the repl in strict mode.
 * Make node modules available to the repl by including paths or names as space separated arguments
 * If the names have dashes, they are converted to camelcase